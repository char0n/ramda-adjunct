import * as RA from '../src/index';
import eq from './shared/eq';

describe('move', function() {
  const list = ['a', 'b', 'c', 'd', 'e'];

  it('should move an item to a higher idx', function() {
    const expected = ['a', 'c', 'd', 'b', 'e'];
    eq(RA.move(1, 3, list), expected);
  });

  it('should move an item to a lower idx', function() {
    const expected = ['a', 'd', 'b', 'c', 'e'];
    eq(RA.move(3, 1, list), expected);
  });

  context('when `toIdx` is equal to maximum index', function() {
    specify('should place the item in the final position', function() {
      const expected = ['a', 'c', 'd', 'e', 'b'];
      eq(RA.move(1, 4, list), expected);
    });
  });

  context('when `toIdx` is greater than maximum idx', function() {
    specify('should place the item in the final position', function() {
      const expected = ['a', 'c', 'd', 'e', 'b'];
      eq(RA.move(1, 10, list), expected);
    });
  });

  context('when `toIdx` is zero', function() {
    specify('should place the item in the first position', function() {
      const expected = ['b', 'a', 'c', 'd', 'e'];
      eq(RA.move(1, 0, list), expected);
    });
  });

  context('when `toIdx` is same as `fromIdx', function() {
    specify('should leave item in same position', function() {
      eq(RA.move(1, 1, list), list);
    });
  });

  it('should support currying', function() {
    const expected = ['a', 'c', 'd', 'b', 'e'];
    eq(RA.move(1)(3, list), expected);
    eq(RA.move(1, 3)(list), expected);
    eq(RA.move(1)(3)(list), expected);
  });

  it(`should treat nested lists like any other items`, function() {
    const listOfLists = [['a', 'b'], ['c', 'd'], ['e', 'f']];
    const expected = [['e', 'f'], ['a', 'b'], ['c', 'd']];
    eq(RA.move(2)(0, listOfLists), expected);
  });
});
