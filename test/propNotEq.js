import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('propNotEq', function () {
  let obj;

  beforeEach(function () {
    obj = { a: 1, b: 2 };
  });

  context('given props values are not equal', function () {
    specify('should return true', function () {
      assert.isTrue(RA.propNotEq('a', 'foo', obj));
    });
  });

  context('given props values are equal', function () {
    specify('should return false', function () {
      assert.isFalse(RA.propNotEq('a', 1, obj));
    });
  });

  it('should have R.equals semantics', function () {
    function Just(x) {
      this.value = x;
    }
    Just.prototype.equals = function (x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };

    assert.isTrue(RA.propNotEq('value', 0, { value: -0 }));
    assert.isTrue(RA.propNotEq('value', -0, { value: 0 }));
    assert.isFalse(RA.propNotEq('value', NaN, { value: NaN }));
    assert.isFalse(
      RA.propNotEq('value', new Just([42]), { value: new Just([42]) })
    );
  });

  context('given there is no prop bar', function () {
    specify('should return true', function () {
      assert.isTrue(RA.propNotEq('bar', 'foo', obj));
    });
  });

  context('given data is array and property name is integer', function () {
    context('and array contains provided index', function () {
      // eslint-disable-next-line mocha/no-hooks-for-single-case
      beforeEach(function () {
        obj = ['a', 'b', 'c'];
      });

      specify('should return false', function () {
        assert.isFalse(RA.propNotEq(0, 'a', obj));
      });
    });

    context('and array does not contains provided index', function () {
      // eslint-disable-next-line mocha/no-hooks-for-single-case
      beforeEach(function () {
        obj = ['a', 'b', 'c'];
      });

      specify('should return true', function () {
        assert.isTrue(RA.propNotEq(0, 'x', obj));
      });
    });
  });

  it('should be curried', function () {
    assert.isTrue(RA.propNotEq('a', 'foo', obj));
    assert.isTrue(RA.propNotEq('a')('foo', obj));
    assert.isTrue(RA.propNotEq('a', 'foo')(obj));
    assert.isTrue(RA.propNotEq('a')('foo')(obj));
  });
});
