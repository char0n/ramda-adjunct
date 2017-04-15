import RA from '../src/index';
import eq from './shared/eq';

describe('paths', function() {
  const obj = { a: { b: { c: 1 } }, d: 4, e: 5, f: 6 };

  it('returns empty array if no paths requested', function() {
    eq(RA.paths([], obj), []);
  });

  it('returns values for requested paths', function() {
    eq(RA.paths([['a', 'b', 'c'], ['e']], obj), [1, 5]);
  });

  it('preserves order', function() {
    eq(RA.paths([['f'], ['a', 'b', 'c'], ['e']], obj), [6, 1, 5]);
  });

  it('returns undefined for nonexistent paths', function() {
    const ps = RA.paths([['d'], ['nonexistent']], obj);
    eq(ps.length, 2);
    eq(ps[0], 4);
    eq(ps[1], undefined);
  });

  it('is curried', function() {
    eq(RA.paths([['a', 'b', 'c'], ['d']])(obj), [1, 4]);
  });
});
