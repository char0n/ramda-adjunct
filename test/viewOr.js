import { assert } from 'chai';
import { lensIndex, lensProp } from 'ramda';

import * as RA from '../src';

describe('viewOr', function() {
  it('tests "view"', function() {
    assert.strictEqual(
      RA.viewOr('foo', lensProp('bar'), { bar: 'foobar' }),
      'foobar'
    );
    assert.isFalse(RA.viewOr('foo', lensProp('bar'), { bar: false }));
    assert.strictEqual(RA.viewOr('foo', lensProp('bar'), { bar: 1 }), 1);
  });

  it('tests found "view" with default value fallback', function() {
    assert.strictEqual(
      RA.viewOr('foo', lensProp('bar'), { bar: undefined }),
      'foo'
    );
    assert.strictEqual(RA.viewOr('foo', lensProp('bar'), { bar: null }), 'foo');
    assert.strictEqual(RA.viewOr('foo', lensProp('bar'), { bar: NaN }), 'foo');
  });

  it('tests default value', function() {
    assert.strictEqual(RA.viewOr('foo', lensProp('bar'), {}), 'foo');
    assert.strictEqual(RA.viewOr('foo', lensIndex(11), []), 'foo');
    assert.strictEqual(RA.viewOr('foo', lensIndex(11), {}), 'foo');
  });

  it('tests currying', function() {
    assert.strictEqual(RA.viewOr('foo')(lensProp('bar'))({}), 'foo');
    assert.strictEqual(RA.viewOr('foo', lensProp('bar'))({}), 'foo');
    assert.strictEqual(RA.viewOr('foo')(lensProp('bar'), {}), 'foo');
  });
});
