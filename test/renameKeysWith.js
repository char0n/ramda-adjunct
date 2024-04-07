import { assert } from 'chai';
import { concat } from 'ramda';

import * as RA from '../src/index.js';

describe('renameKeysWith', function () {
  it('should rename object keys', function () {
    assert.deepEqual(RA.renameKeysWith(concat('a'), { key1: 1, key2: 2 }), {
      akey1: 1,
      akey2: 2,
    });
  });

  it('should return an empty object when renames keys on null and undefined', function () {
    assert.deepEqual(RA.renameKeysWith(concat('a'), null), {});
    assert.deepEqual(RA.renameKeysWith(concat('a'), undefined), {});
  });

  it('should be curried', function () {
    assert.deepEqual(RA.renameKeysWith(concat('a'))({ key1: 1, key2: 2 }), {
      akey1: 1,
      akey2: 2,
    });
  });
});
