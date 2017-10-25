import RA from '../src/index';
import eq from './shared/eq';


describe('spreadProp', function() {
  let prop;
  let obj;

  beforeEach(function () {
    prop = 'b';
    obj = {
      a: 1,
      b: { c: 3, d: 4 },
    };
  });

  it('tests currying', function () {
    eq(RA.spreadProp('prop', {}), {});
    eq(RA.spreadProp('prop')({}), {});
  });

  context("when prop doesn't exist", function () {
    specify('should return object with identical structure as provided object', function () {
      eq(RA.spreadProp('not_exist', obj), obj);
    });
  });

  context('when prop leads to non object', function () {
    specify('should return object without prop', function () {
      obj = {
        a: 1,
        b: 999,
      };
      eq(RA.spreadProp(prop, obj), { a: 1 });
    });
  });

  context('when prop leads to object with same prop name', function () {
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
      eq(RA.spreadProp(prop, obj), expected);
    });
  });

  context('when standard usecase', function () {
    specify('should return object with spreaded prop', function () {
      const expected = {
        a: 1,
        c: 3,
        d: 4,
      };
      eq(RA.spreadProp(prop, obj), expected);
    });
  });
});
