import * as R from 'ramda';

import * as RA from '../src/index';
import eq from './shared/eq';


describe('pathNotEq', function () {
  let obj;

  beforeEach(function () {
    obj = { a: { b: 1 } };
  });

  it('tests currying', function () {
    eq(RA.pathNotEq(['a', 'b'], 'foo', obj), true);
    eq(RA.pathNotEq(['a', 'b'])('foo', obj), true);
    eq(RA.pathNotEq(['a', 'b'], 'foo')(obj), true);
    eq(RA.pathNotEq(['a', 'b'])('foo')(obj), true);
  });

  it('tests path value is not equal', function () {
    eq(RA.pathNotEq(['a', 'b'], 'foo', obj), true);
  });

  it('tests path value is equal', function () {
    eq(RA.pathNotEq(['a', 'b'], 1, obj), false);
  });

  it('has R.equals semantics', function () {
    function Just(x) { this.value = x }
    Just.prototype.equals = function (x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };

    eq(RA.pathNotEq(['a', 'b'], 0, { a: { b: -0 } }), true);
    eq(RA.pathNotEq(['a', 'b'], -0, { a: { b: 0 } }), true);
    eq(RA.pathNotEq(['a', 'b'], NaN, { a: { b: NaN } }), false);
    eq(RA.pathNotEq(['a', 'b'], new Just([42]), { a: { b: new Just([42]) } }), false);
  });

  context('when there is no path', function () {
    specify('should return true', function () {
      eq(RA.pathNotEq(['bar', 'baz'], 'foo', obj), true);
    });
  });

  context('when data is array and path consists integers', function () {
    context('and array contains provided path', function () {
      // eslint-disable-next-line mocha/no-hooks-for-single-case
      beforeEach(function () {
        obj = [['a', 'b', 'c'], ['d', 'f']];
      });

      specify('should return false', function () {
        eq(RA.pathNotEq([0, 1], 'b', obj), false);
      });
    });

    context('and array does not contains provided path', function () {
      // eslint-disable-next-line mocha/no-hooks-for-single-case
      beforeEach(function () {
        obj = [['a', 'b', 'c'], ['d', 'f']];
      });

      specify('should return true', function () {
        eq(RA.pathNotEq([999, 999], 'x', obj), true);
      });
    });
  });

  it('tests example', function () {
    const user1 = { address: { zipCode: 90210 } };
    const user2 = { address: { zipCode: 55555 } };
    const user3 = { name: 'Bob' };
    const users = [user1, user2, user3];
    const isFamous = RA.pathNotEq(['address', 'zipCode'], 90210);
    const result = R.filter(isFamous, users); //= > [ user2, user3 ]

    eq(result, [user2, user3]);
  });
});
