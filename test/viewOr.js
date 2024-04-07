import { assert } from 'chai';
import { lensIndex, lensProp } from 'ramda';

import * as RA from '../src/index.js';

describe('viewOr', function () {
  it('should return a "view", determined by the given lens', function () {
    assert.strictEqual(
      RA.viewOr('foo', lensProp('bar'), { bar: 'foobar' }),
      'foobar'
    );
    assert.isFalse(RA.viewOr('foo', lensProp('bar'), { bar: false }));
    assert.strictEqual(RA.viewOr('foo', lensProp('bar'), { bar: 1 }), 1);
  });

  it('should return a defaul value if "view" is null, undefined or NaN', function () {
    assert.strictEqual(
      RA.viewOr('foo', lensProp('bar'), { bar: undefined }),
      'foo'
    );
    assert.strictEqual(RA.viewOr('foo', lensProp('bar'), { bar: null }), 'foo');
    assert.strictEqual(RA.viewOr('foo', lensProp('bar'), { bar: NaN }), 'foo');
  });

  it('should support a default value', function () {
    assert.strictEqual(RA.viewOr('foo', lensProp('bar'), {}), 'foo');
    assert.strictEqual(RA.viewOr('foo', lensIndex(11), []), 'foo');
    assert.strictEqual(RA.viewOr('foo', lensIndex(11), {}), 'foo');
  });

  it('should be curried', function () {
    assert.strictEqual(RA.viewOr('foo')(lensProp('bar'))({}), 'foo');
    assert.strictEqual(RA.viewOr('foo', lensProp('bar'))({}), 'foo');
    assert.strictEqual(RA.viewOr('foo')(lensProp('bar'), {}), 'foo');
  });
});
