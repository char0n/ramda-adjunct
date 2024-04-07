import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('zipObjWith', function () {
  it('should zip a pair of lists into an object', function () {
    const keys = ['packageA', 'packageB', 'packageC'];
    const values = [
      { name: 'packageA', version: '1.0.9' },
      { name: 'packageB', version: '1.6.1' },
      { name: 'packageC', version: '1.6.0' },
    ];
    const fn = (v, k) => [k, { version: v.version }];

    const actual = RA.zipObjWith(fn, keys, values);

    const expected = {
      packageA: { version: '1.0.9' },
      packageB: { version: '1.6.1' },
      packageC: { version: '1.6.0' },
    };

    assert.deepEqual(actual, expected);
  });

  context('given empty key/value lists', function () {
    specify('should return an empty object', function () {
      const fn = (v, k) => [k, v];
      const keys = [];
      const values = [];
      const expected = {};

      assert.deepEqual(RA.zipObjWith(fn, keys, values), expected);
    });
  });

  context('given key/value lists of unequal length', function () {
    specify('should truncate to the length of the shortest list', function () {
      const fn = (v, k) => [k, v];
      const long = ['a', 'b', 'c'];
      const short = ['x', 'y'];

      assert.deepEqual(RA.zipObjWith(fn, long, short), { a: 'x', b: 'y' });
      assert.deepEqual(RA.zipObjWith(fn, short, long), { x: 'a', y: 'b' });
    });
  });

  it('should be curried', function () {
    const fn = (v, k) => [k, `${k}${v + 1}`];
    const keys = ['a', 'b', 'c', 'd'];
    const values = [1, 2, 3];
    const expected = { a: 'a2', b: 'b3', c: 'c4' };

    assert.deepEqual(RA.zipObjWith(fn, keys, values), expected);
    assert.deepEqual(RA.zipObjWith(fn, keys)(values), expected);
    assert.deepEqual(RA.zipObjWith(fn)(keys)(values), expected);
    assert.deepEqual(RA.zipObjWith()(fn)(keys)(values), expected);
    assert.deepEqual(RA.zipObjWith(fn)(R.__, values)(keys), expected);
  });
});
