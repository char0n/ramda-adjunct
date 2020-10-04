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

  it('should be curried', function () {
    assert.deepEqual(RA.renameKeyWith(concat('a'))('A')({ A: 1 }), {
      aA: 1,
    });
  });
});
