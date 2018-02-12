import * as RA from '../src/index';
import eq from './shared/eq';


describe('appendFlipped', function () {
  it('adds the element to the end of the list', function () {
    eq(RA.appendFlipped(['x', 'y'], 'z'), ['x', 'y', 'z']);
    eq(RA.appendFlipped(['x', 'y'], ['a', 'z']), ['x', 'y', ['a', 'z']]);
  });

  it('works on empty list', function () {
    eq(RA.appendFlipped([], 1), [1]);
  });
});
