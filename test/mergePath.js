import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('mergePath', function () {
  let path;
  let source;
  let obj;
  let expected;

  beforeEach(function () {
    path = ['a', 'b'];
    source = { c2: 22, c3: 33 };
    obj = { a: { b: { c1: 1, c2: 2 } } };
    expected = { a: { b: { c1: 1, c2: 22, c3: 33 } } };
  });

  it('should merge the property paths containing object', function () {
    assert.deepEqual(RA.mergePath(path, source, obj), expected);
  });

  context('given an empty source', function () {
    specify('should return unmodified object', function () {
      assert.deepEqual(RA.mergePath(path, {}, obj), obj);
    });
  });

  context('given an empty object', function () {
    specify('should create an object with subject under path', function () {
      expected = { a: { b: { c2: 22, c3: 33 } } };
      assert.deepEqual(RA.mergePath(path, source, {}), expected);
    });
  });

  context('given a target that is not an object', function () {
    it('should create an object with subject under path', function () {
      expected = { a: { b: { c2: 22, c3: 33 } } };
      assert.deepEqual(RA.mergePath(path, source, { a: { b: 1 } }), expected);
    });
  });

  it('should be curried', function () {
    assert.deepEqual(RA.mergePath(path, source, obj), expected);
    assert.deepEqual(RA.mergePath(path)(source, obj), expected);
    assert.deepEqual(RA.mergePath(path, source)(obj), expected);
    assert.deepEqual(RA.mergePath(path)(source)(obj), expected);
  });
});
