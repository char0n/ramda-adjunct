import { assert } from 'chai';
import { concat } from 'ramda';

import * as RA from '../src/index.js';

describe('renameKeyWith', function () {
  it('should rename object keys', function () {
    assert.deepEqual(RA.renameKeyWith(concat('a'), 'A', { A: 1 }), {
      aA: 1,
    });
  });

  it('should not change other key-value pairs', function () {
    assert.deepEqual(RA.renameKeyWith(concat('a'), 'A', { A: 1, B: 2 }), {
      aA: 1,
      B: 2,
    });
  });

  it('should return an empty object when renames keys on null and undefined', function () {
    assert.deepEqual(RA.renameKeyWith(concat('a'), 'A', null), {});
    assert.deepEqual(RA.renameKeyWith(concat('a'), 'A', undefined), {});
  });

  it('should return the original object when renaming a non-existant key', function () {
    assert.deepEqual(RA.renameKeyWith(concat('a'), 'B', { A: 1 }), {
      A: 1,
    });
  });

  it('should be curried', function () {
    assert.deepEqual(RA.renameKeyWith(concat('a'))('A')({ A: 1 }), {
      aA: 1,
    });
    assert.deepEqual(RA.renameKeyWith(concat('a'), 'A')({ A: 1 }), {
      aA: 1,
    });
    assert.deepEqual(RA.renameKeyWith(concat('a'))('A', { A: 1 }), {
      aA: 1,
    });
  });
});
