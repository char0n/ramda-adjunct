import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('mergeProp', function () {
  let prop;
  let source;
  let obj;
  let expected;

  beforeEach(function () {
    prop = 'a';
    source = { c2: 22, c3: 33 };
    obj = { a: { c1: 1, c2: 2 } };
    expected = { a: { c1: 1, c2: 22, c3: 33 } };
  });

  it('should merge the property paths containing object', function () {
    assert.deepEqual(RA.mergeProp(prop, source, obj), expected);
  });

  context('given source is empty', function () {
    specify('should return unmodified object', function () {
      assert.deepEqual(RA.mergeProp(prop, {}, obj), obj);
    });
  });

  context('given obj is empty', function () {
    specify('should create an object with subject under prop', function () {
      expected = { a: { c2: 22, c3: 33 } };
      assert.deepEqual(RA.mergeProp(prop, source, {}), expected);
    });
  });

  context('given a target that is not an object', function () {
    specify('should create an object with subject under prop', function () {
      expected = { a: { c2: 22, c3: 33 } };
      assert.deepEqual(RA.mergeProp(prop, source, { a: 1 }), expected);
    });
  });

  it('should be curried', function () {
    assert.deepEqual(RA.mergeProp(prop, source, obj), expected);
    assert.deepEqual(RA.mergeProp(prop)(source, obj), expected);
    assert.deepEqual(RA.mergeProp(prop, source)(obj), expected);
    assert.deepEqual(RA.mergeProp(prop)(source)(obj), expected);
  });
});
