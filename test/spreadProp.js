import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('spreadProp', function () {
  let prop;
  let obj;

  beforeEach(function () {
    prop = 'b';
    obj = {
      a: 1,
      b: { c: 3, d: 4 },
    };
  });

  context("given prop doesn't exist", function () {
    specify(
      'should return object with identical structure as provided object',
      function () {
        assert.deepEqual(RA.spreadProp('not_exist', obj), obj);
      }
    );
  });

  context('given prop leads to non object', function () {
    specify('should return object without prop', function () {
      obj = {
        a: 1,
        b: 999,
      };

      assert.deepEqual(RA.spreadProp(prop, obj), { a: 1 });
    });
  });

  context('given prop leads to object with same prop name', function () {
    specify('should override existing props on provided object', function () {
      obj = {
        a: 1,
        b: { b: 999, c: 3, d: 4 },
      };
      const expected = {
        a: 1,
        c: 3,
        d: 4,
        b: 999,
      };

      assert.deepEqual(RA.spreadProp(prop, obj), expected);
    });
  });

  it('should return object with spreaded prop', function () {
    const expected = {
      a: 1,
      c: 3,
      d: 4,
    };

    assert.deepEqual(RA.spreadProp(prop, obj), expected);
  });

  it('should be curried', function () {
    assert.deepEqual(RA.spreadProp('prop', {}), {});
    assert.deepEqual(RA.spreadProp('prop')({}), {});
  });
});
