import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('mergeRight', function() {
  it('takes two objects, merges their own properties and returns a new object', function() {
    const a = { w: 1, x: 2 };
    const b = { y: 3, z: 4 };
    assert.deepEqual(RA.mergeRight(a, b), { w: 1, x: 2, y: 3, z: 4 });
  });

  it('overrides properties in the seconds object with properties in the first object', function() {
    const a = { w: 1, x: 2 };
    const b = { w: 100, y: 3, z: 4 };
    assert.deepEqual(RA.mergeRight(b, a), { w: 100, x: 2, y: 3, z: 4 });
  });

  it('is not destructive', function() {
    const a = { w: 1, x: 2 };
    const res = RA.mergeRight({ x: 5 }, a);

    assert.notStrictEqual(a, res);
    assert.deepEqual(res, { w: 1, x: 5 });
  });

  it('reports only own properties', function() {
    const a = { w: 1, x: 2 };
    function Cla() {}
    Cla.prototype.x = 5;
    assert.deepEqual(RA.mergeRight(a, new Cla()), { w: 1, x: 2 });
    assert.deepEqual(RA.mergeRight(new Cla(), a), { w: 1, x: 2 });
  });

  it('is curried', function() {
    const curried = RA.mergeRight({ w: 1, x: 2 });
    const b = { y: 3, z: 4 };
    assert.deepEqual(curried(b), { w: 1, x: 2, y: 3, z: 4 });
  });

  it('is curried with placeholder', function() {
    const curried = RA.mergeRight({ w: 1, x: 2 }, R.__);
    assert.deepEqual(curried({ x: 3, y: 4 }), { w: 1, x: 2, y: 4 });
  });
});

describe('resetToDefault', function() {
  it('tests an alias', function() {
    assert.strictEqual(RA.mergeRight, RA.resetToDefault);
  });
});
