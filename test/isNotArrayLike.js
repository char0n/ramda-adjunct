'use strict';

const RA = require('../src/index');
const eq = require('./shared/eq');

describe('isArrayLike', function() {
  it('is false for Arrays', function() {
    eq(RA.isNotArrayLike([]), false);
    eq(RA.isNotArrayLike([1, 2, 3, 4]), false);
    eq(RA.isNotArrayLike([null]), false);
  });

  it('is false for arguments', function() {
    function test() {
      return RA.isNotArrayLike(arguments);
    }
    eq(test(), false);
    eq(test(1, 2, 3), false);
    eq(test(null), false);
  });

  it('is true for Strings', function() {
    eq(RA.isNotArrayLike(''), true);
    eq(RA.isNotArrayLike('abcdefg'), true);
  });

  it('is false for arbitrary objects with numeric length, if extreme indices are defined', function() {
    const obj1 = { length: 0 };
    const obj2 = { 0: 'something', length: 0 };
    const obj3 = { 0: void 0, length: 0 };
    const obj4 = { 0: 'zero', 1: 'one', length: 2 };
    const obj5 = { 0: 'zero', length: 2 };
    const obj6 = { 1: 'one', length: 2 };
    eq(RA.isNotArrayLike(obj1), false);
    eq(RA.isNotArrayLike(obj2), false);
    eq(RA.isNotArrayLike(obj3), false);
    eq(RA.isNotArrayLike(obj4), false);
    eq(RA.isNotArrayLike(obj5), true);
    eq(RA.isNotArrayLike(obj6), true);
  });

  it('is true for everything else', function() {
    eq(RA.isNotArrayLike(undefined), true);
    eq(RA.isNotArrayLike(1), true);
    eq(RA.isNotArrayLike({}), true);
    eq(RA.isNotArrayLike(false), true);
    eq(RA.isNotArrayLike(function() {}), true);
  });
});
