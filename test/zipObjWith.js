import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('unzipObjWith', function() {
  it('unzips an object into key/value arrays applying a value/key transform', function() {
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

  it('should curry', function() {
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
