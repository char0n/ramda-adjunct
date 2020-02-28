import { assert } from 'chai';

import * as RA from '../src';

describe('paths', function() {
  const obj = { a: { b: { c: 1 } }, d: 4, e: 5, f: 6 };

  it('should return an empty array if no paths requested', function() {
    assert.sameOrderedMembers(RA.paths([], obj), []);
  });

  it('should return values for requested paths', function() {
    assert.sameOrderedMembers(RA.paths([['a', 'b', 'c'], ['e']], obj), [1, 5]);
  });

  it('should preserve order', function() {
    assert.sameOrderedMembers(RA.paths([['f'], ['a', 'b', 'c'], ['e']], obj), [
      6,
      1,
      5,
    ]);
  });

  it('should return undefined for nonexistent paths', function() {
    const ps = RA.paths([['d'], ['nonexistent']], obj);
    assert.lengthOf(ps, 2);
    assert.strictEqual(ps[0], 4);
    assert.isUndefined(ps[1]);
  });

  it('should be curried', function() {
    assert.sameOrderedMembers(RA.paths([['a', 'b', 'c'], ['d']])(obj), [1, 4]);
  });
});
