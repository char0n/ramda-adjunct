import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('propNotEq', function () {
  let obj;

  beforeEach(function () {
    obj = { a: 1, b: 2 };
  });

  context('given props values are not equal', function () {
    specify('should return true', function () {
      assert.isTrue(RA.propNotEq('foo', 'a', obj));
    });
  });

  context('given props values are equal', function () {
    specify('should return false', function () {
      assert.isFalse(RA.propNotEq(1, 'a', obj));
    });
  });

  it('should have R.equals semantics', function () {
    function Just(x) {
      this.value = x;
    }
    Just.prototype.equals = function (x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };

    assert.isTrue(RA.propNotEq(0, 'value', { value: -0 }));
    assert.isTrue(RA.propNotEq(-0, 'value', { value: 0 }));
    assert.isFalse(RA.propNotEq(NaN, 'value', { value: NaN }));
    assert.isFalse(
      RA.propNotEq(new Just([42]), 'value', { value: new Just([42]) })
    );
  });

  context('given there is no prop bar', function () {
    specify('should return true', function () {
      assert.isTrue(RA.propNotEq('foo', 'bar', obj));
    });
  });

  context('given data is array and property name is integer', function () {
    context('and array contains provided index', function () {
      beforeEach(function () {
        obj = ['a', 'b', 'c'];
      });

      specify('should return false', function () {
        assert.isFalse(RA.propNotEq('a', 0, obj));
      });
    });

    context('and array does not contains provided index', function () {
      beforeEach(function () {
        obj = ['a', 'b', 'c'];
      });

      specify('should return true', function () {
        assert.isTrue(RA.propNotEq('x', 0, obj));
      });
    });
  });

  it('should be curried', function () {
    assert.isTrue(RA.propNotEq('foo', 'a', obj));
    assert.isTrue(RA.propNotEq('foo')('a', obj));
    assert.isTrue(RA.propNotEq('foo', 'a')(obj));
    assert.isTrue(RA.propNotEq('foo')('a')(obj));
  });
});
