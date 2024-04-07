import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('move', function () {
  const list = ['a', 'b', 'c', 'd', 'e'];

  it('should move an item to a higher idx', function () {
    const expected = ['a', 'c', 'd', 'b', 'e'];
    assert.sameOrderedMembers(RA.move(1, 3, list), expected);
  });

  it('should move an item to a lower idx', function () {
    const expected = ['a', 'd', 'b', 'c', 'e'];
    assert.sameOrderedMembers(RA.move(3, 1, list), expected);
  });

  context('given `toIdx` is equal to maximum index', function () {
    specify('should place the item in the final position', function () {
      const expected = ['a', 'c', 'd', 'e', 'b'];
      assert.sameOrderedMembers(RA.move(1, 4, list), expected);
    });
  });

  context('given `toIdx` is greater than maximum idx', function () {
    specify('should place the item in the final position', function () {
      const expected = ['a', 'c', 'd', 'e', 'b'];
      assert.sameOrderedMembers(RA.move(1, 10, list), expected);
    });
  });

  context('given `toIdx` is zero', function () {
    specify('should place the item in the first position', function () {
      const expected = ['b', 'a', 'c', 'd', 'e'];
      assert.sameOrderedMembers(RA.move(1, 0, list), expected);
    });
  });

  context('given `toIdx` is same as `fromIdx', function () {
    specify('should leave item in same position', function () {
      assert.sameOrderedMembers(RA.move(1, 1, list), list);
    });
  });

  context('given `fromIdx` is greater than maximum index', function () {
    specify('should place `undefined` in newIdx position', function () {
      const expected = ['a', 'b', undefined, 'c', 'd', 'e'];
      assert.sameOrderedMembers(RA.move(6, 2, list), expected);
    });
  });

  it('should treat nested lists like any other items', function () {
    const listOfLists = [
      ['a', 'b'],
      ['c', 'd'],
      ['e', 'f'],
    ];
    const expected = [
      ['e', 'f'],
      ['a', 'b'],
      ['c', 'd'],
    ];
    assert.sameDeepOrderedMembers(RA.move(2)(0, listOfLists), expected);
  });

  it('should be curried', function () {
    const expected = ['a', 'c', 'd', 'b', 'e'];
    assert.sameOrderedMembers(RA.move(1)(3, list), expected);
    assert.sameOrderedMembers(RA.move(1, 3)(list), expected);
    assert.sameOrderedMembers(RA.move(1)(3)(list), expected);
  });
});
