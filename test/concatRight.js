import * as R from 'ramda';
import { assert } from 'chai';

import eq from './shared/eq';
import * as RA from '../src';

describe('concatRight', function() {
  const z1 = {
    x: 'z1',
    concat(that) {
      return `${this.x} ${that.x}`;
    }, // eslint-disable-line prefer-template
  };
  const z2 = { x: 'z2' };

  it('should add combines the elements of the two lists', function() {
    eq(RA.concatRight(['a', 'b'], ['c', 'd']), ['c', 'd', 'a', 'b']);
    eq(RA.concatRight([], ['c', 'd']), ['c', 'd']);
  });

  it('should work on strings', function() {
    eq(RA.concatRight('foo', 'bar'), 'barfoo');
    eq(RA.concatRight('x', ''), 'x');
    eq(RA.concatRight('', 'x'), 'x');
    eq(RA.concatRight('', ''), '');
  });

  it('should delegate to non-String object with a concat method, as first param', function() {
    eq(RA.concatRight(z2, z1), 'z1 z2');
  });

  it('should be curried', function() {
    const conc123 = RA.concatRight([1, 2, 3]);
    eq(conc123([4, 5, 6]), [4, 5, 6, 1, 2, 3]);
    eq(conc123(['a', 'b', 'c']), ['a', 'b', 'c', 1, 2, 3]);
  });

  it('should be curried like a binary operator, that accepts an initial placeholder', function() {
    const appendBar = RA.concatRight(R.__, 'bar');
    eq(typeof appendBar, 'function');
    eq(appendBar('foo'), 'barfoo');
  });

  context('given attempting to combine an array with a non-array', function() {
    specify('should throw TypeError', function() {
      assert.throws(RA.concatRight.bind(null, [1], 2), TypeError);
    });
  });

  context(
    'given arguments are not array, String or object with a concat method',
    function() {
      specify('should trow TypeError', function() {
        assert.throws(RA.concatRight.bind(null, {}, {}), TypeError);
      });
    }
  );

  it('should curry', function() {
    eq(RA.concatRight(['a', 'b'], ['c', 'd']), ['c', 'd', 'a', 'b']);
    eq(RA.concatRight(['a', 'b'])(['c', 'd']), ['c', 'd', 'a', 'b']);
  });
});
