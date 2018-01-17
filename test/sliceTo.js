import * as RA from '../src/index';
import eq from './shared/eq';


describe('sliceTo', function () {
  it('retrieves the proper sublist of a list', function () {
    const list = [8, 6, 7, 5, 3, 0, 9];
    eq(RA.sliceTo(3, list), [8, 6, 7]);
  });

  it('handles array-like object', function () {
    const args = (function () { return arguments }(1, 2, 3, 4, 5));
    eq(RA.sliceTo(2, args), [1, 2]);
  });

  it('can operate on strings', function () {
    eq(RA.sliceTo(0, 'abc'), '');
    eq(RA.sliceTo(1, 'abc'), 'a');
    eq(RA.sliceTo(2, 'abc'), 'ab');
    eq(RA.sliceTo(3, 'abc'), 'abc');
    eq(RA.sliceTo(4, 'abc'), 'abc');
    eq(RA.sliceTo(-4, 'abc'), '');
    eq(RA.sliceTo(-3, 'abc'), '');
    eq(RA.sliceTo(-2, 'abc'), 'a');
    eq(RA.sliceTo(-1, 'abc'), 'ab');
  });
});
