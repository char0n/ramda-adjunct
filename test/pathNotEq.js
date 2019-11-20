import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('pathNotEq', function() {
  let obj;

  beforeEach(function() {
    obj = { a: { b: 1 } };
  });

  it('should curry', function() {
    assert.isTrue(RA.pathNotEq(['a', 'b'], 'foo', obj));
    assert.isTrue(RA.pathNotEq(['a', 'b'])('foo', obj));
    assert.isTrue(RA.pathNotEq(['a', 'b'], 'foo')(obj));
    assert.isTrue(RA.pathNotEq(['a', 'b'])('foo')(obj));
  });

  it('tests path value is not equal', function() {
    assert.isTrue(RA.pathNotEq(['a', 'b'], 'foo', obj));
  });

  it('tests path value is equal', function() {
    assert.isFalse(RA.pathNotEq(['a', 'b'], 1, obj));
  });

  it('has R.equals semantics', function() {
    function Just(x) {
      this.value = x;
    }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };

    assert.isTrue(RA.pathNotEq(['a', 'b'], 0, { a: { b: -0 } }));
    assert.isTrue(RA.pathNotEq(['a', 'b'], -0, { a: { b: 0 } }));
    assert.isFalse(RA.pathNotEq(['a', 'b'], NaN, { a: { b: NaN } }));
    assert.isFalse(
      RA.pathNotEq(['a', 'b'], new Just([42]), { a: { b: new Just([42]) } })
    );
  });

  context('given there is no path', function() {
    specify('should return true', function() {
      assert.isTrue(RA.pathNotEq(['bar', 'baz'], 'foo', obj));
    });
  });

  context('given data is array and path consists integers', function() {
    context('and array contains provided path', function() {
      // eslint-disable-next-line mocha/no-hooks-for-single-case
      beforeEach(function() {
        obj = [
          ['a', 'b', 'c'],
          ['d', 'f'],
        ];
      });

      specify('should return false', function() {
        assert.isFalse(RA.pathNotEq([0, 1], 'b', obj));
      });
    });

    context('and array does not contains provided path', function() {
      // eslint-disable-next-line mocha/no-hooks-for-single-case
      beforeEach(function() {
        obj = [
          ['a', 'b', 'c'],
          ['d', 'f'],
        ];
      });

      specify('should return true', function() {
        assert.isTrue(RA.pathNotEq([999, 999], 'x', obj));
      });
    });
  });

  it('should test example', function() {
    const user1 = { address: { zipCode: 90210 } };
    const user2 = { address: { zipCode: 55555 } };
    const user3 = { name: 'Bob' };
    const users = [user1, user2, user3];
    const isFamous = RA.pathNotEq(['address', 'zipCode'], 90210);
    const result = R.filter(isFamous, users); //= > [ user2, user3 ]

    assert.sameDeepOrderedMembers(result, [user2, user3]);
  });
});
