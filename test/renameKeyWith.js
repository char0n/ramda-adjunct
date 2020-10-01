import { assert } from 'chai';
import { concat } from 'ramda';

import * as RA from '../src';

describe('renameKeyWith', function () {
  it('should rename object keys', function () {
    assert.deepEqual(RA.renameKeyWith(concat('a'), 'A', { A: 1 }), {
      aA: 1,
    });
  });

  it('should return an empty object when renames keys on null and undefined', function () {
    assert.deepEqual(RA.renameKeyWith(concat('a'), 'A', null), {});
    assert.deepEqual(RA.renameKeyWith(concat('a'), 'A', undefined), {});
  });

  it('should overwrite existing values for the new key name', function () {
    assert.deepEqual(RA.renameKeyWith(concat('a'), 'A', { A: 1, aA: 2 }), {
      aA: 1,
    });
  });

  it('should be curried', function () {
    assert.deepEqual(RA.renameKeyWith(concat('a'))('A')({ A: 1 }), {
      aA: 1,
    });
  });
});
