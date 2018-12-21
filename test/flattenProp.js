import * as RA from '../src/index';
import eq from './shared/eq';

describe('flattenProp', function() {
  let prop;
  let obj;

  beforeEach(function() {
    prop = 'b';
    obj = {
      a: 1,
      b: { c: 3, d: 4 },
    };
  });

  it('should curry', function() {
    eq(RA.flattenProp('prop', {}), {});
    eq(RA.flattenProp('prop')({}), {});
  });

  context("given prop doesn't exist", function() {
    specify(
      'should return object with identical structure as provided object',
      function() {
        eq(RA.flattenProp('not_exist', obj), obj);
      }
    );
  });

  context('given prop leads to non object', function() {
    specify(
      'should return object with identical structure as provided object',
      function() {
        obj = {
          a: 1,
          b: 999,
        };
        eq(RA.flattenProp(prop, obj), obj);
      }
    );
  });

  context('given prop leads to object with same prop name', function() {
    specify('should override existing props on provided object', function() {
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

      eq(RA.flattenProp(prop, obj), expected);
    });
  });

  it('should return object with flattened prop', function() {
    const expected = {
      a: 1,
      c: 3,
      d: 4,
      b: { c: 3, d: 4 },
    };

    eq(RA.flattenProp(prop, obj), expected);
  });
});
