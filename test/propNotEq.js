import * as R from 'ramda';

import * as RA from '../src/index';
import eq from './shared/eq';


describe('propNotEq', function () {
  let obj;

  beforeEach(function () {
    obj = { a: 1, b: 2 };
  });

  it('tests currying', function () {
    eq(RA.propNotEq('a', 'foo', obj), true);
    eq(RA.propNotEq('a')('foo', obj), true);
    eq(RA.propNotEq('a', 'foo')(obj), true);
    eq(RA.propNotEq('a')('foo')(obj), true);
  });

  it('tests prop value is not equal', function () {
    eq(RA.propNotEq('a', 'foo', obj), true);
  });

  it('tests prop value is equal', function () {
    eq(RA.propNotEq('a', 1, obj), false);
  });

  it('has R.equals semantics', function () {
    function Just(x) { this.value = x }
    Just.prototype.equals = function (x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };

    eq(RA.propNotEq('value', 0, { value: -0 }), true);
    eq(RA.propNotEq('value', -0, { value: 0 }), true);
    eq(RA.propNotEq('value', NaN, { value: NaN }), false);
    eq(RA.propNotEq('value', new Just([42]), { value: new Just([42]) }), false);
  });

  context('when there is prop bar', function () {
    specify('should return true', function () {
      eq(RA.propNotEq('bar', 'foo', obj), true);
    });
  });

  context('when data is array and property name is integer', function () {
    context('and array contains provided index', function () {
      beforeEach(function () {
        obj = ['a', 'b', 'c'];
      });

      specify('should return false', function () {
        eq(RA.propNotEq(0, 'a', obj), false);
      });
    });

    context('and array does not contains provided index', function () {
      beforeEach(function () {
        obj = ['a', 'b', 'c'];
      });

      specify('should return true', function () {
        eq(RA.propNotEq(0, 'x', obj), true);
      });
    });
  });
});
