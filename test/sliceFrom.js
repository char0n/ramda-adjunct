import * as RA from '../src/index';
import eq from './shared/eq';


describe('sliceFrom', function() {
  it('retrieves the proper sublist of a list', function() {
    const list = [8, 6, 7, 5, 3, 0, 9];
    eq(RA.sliceFrom(2, list), [7, 5, 3, 0, 9]);
  });

  it('handles array-like object', function() {
    const args = (function() { return arguments }(1, 2, 3, 4, 5));
    eq(RA.sliceFrom(1, args), [2, 3, 4, 5]);
  });

  it('can operate on strings', function() {
    eq(RA.sliceFrom(0, 'abc'), 'abc');
    eq(RA.sliceFrom(1, 'abc'), 'bc');
    eq(RA.sliceFrom(2, 'abc'), 'c');
    eq(RA.sliceFrom(3, 'abc'), '');
    eq(RA.sliceFrom(4, 'abc'), '');
    eq(RA.sliceFrom(-4, 'abc'), 'abc');
    eq(RA.sliceFrom(-3, 'abc'), 'abc');
    eq(RA.sliceFrom(-2, 'abc'), 'bc');
    eq(RA.sliceFrom(-1, 'abc'), 'c');
  });
});
