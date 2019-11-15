import { assert } from 'chai';

import * as RA from '../src';

describe('mergeProps', function() {
  let obj;
  let expected;

  beforeEach(function() {
    obj = {
      foo: { fooinner: 1 },
      bar: { barinner: 2 },
    };
    expected = { fooinner: 1, barinner: 2 };
  });

  it('tests currying', function() {
    assert.deepEqual(RA.mergeProps(['foo', 'bar'], obj), expected);
    assert.deepEqual(RA.mergeProps(['foo', 'bar'])(obj), expected);
  });

  it('tests merging the props containing objects', function() {
    assert.deepEqual(RA.mergeProps(['foo', 'bar'], obj), expected);
  });

  it('tests merging the props containing non-objects', function() {
    assert.deepEqual(RA.mergeProps(['foo', 'bar'], { foo: 1, bar: 2 }), {});
    assert.deepEqual(RA.mergeProps(['foo', 'bar'], { foo: 'a', bar: 'b' }), {
      0: 'b',
    });
    assert.deepEqual(
      RA.mergeProps(['foo', 'bar'], { foo: null, bar: undefined }),
      {}
    );
  });

  it('tests if no props requested', function() {
    assert.deepEqual(RA.mergeProps([], { foo: 1, bar: 2 }), {});
  });
});
