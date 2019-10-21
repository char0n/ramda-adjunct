import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('unzipObjWith', function() {
  it('unzips an object into key/value arrays applying a value/key transform', function() {
    const fn = (value, key) => [key, { ...value, name: key }];
    const obj = {
      packageA: { version: '1.0.9' },
      packageB: { version: '1.6.1' },
      packageC: { version: '1.6.0' },
    };

    const actual = RA.unzipObjWith(fn, obj);

    const expected = [
      ['packageA', 'packageB', 'packageC'],
      [
        { name: 'packageA', version: '1.0.9' },
        { name: 'packageB', version: '1.6.1' },
        { name: 'packageC', version: '1.6.0' },
      ],
    ];

    assert.deepEqual(actual, expected);
  });

  it('should curry', function() {
    const fn = (v, k) => [`new${k.toUpperCase()}`, 2 * v];
    const obj = { a: 1, b: 2, c: 3 };
    const expected = [['newA', 'newB', 'newC'], [2, 4, 6]];

    assert.deepEqual(RA.unzipObjWith(fn, obj), expected);
    assert.deepEqual(RA.unzipObjWith(fn)(obj), expected);
    assert.deepEqual(RA.unzipObjWith()(fn)(obj), expected);
    assert.deepEqual(RA.unzipObjWith(R.__, obj)(fn), expected);
  });
});
