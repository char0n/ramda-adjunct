import { assert } from 'chai';

import * as RA from '../src';

describe('renameKey', function () {
  it('should rename object keys', function () {
    assert.deepEqual(
      RA.renameKey('key1', 'renamedKey1', { key1: 1, key2: 2 }),
      {
        renamedKey1: 1,
        key2: 2,
      }
    );
  });

  it('should ignore non existing keys', function () {
    assert.deepEqual(RA.renameKey('nonExistingKey', 'key2', { key1: 1 }), {
      key1: 1,
    });
  });

  it('should return an empty object when renames keys on null and undefined', function () {
    assert.deepEqual(RA.renameKey('key1', 'key2', null), {});
    assert.deepEqual(RA.renameKey('key1', 'key2', undefined), {});
  });

  it('should be curried', function () {
    assert.deepEqual(RA.renameKey('key1', 'key3', { key1: 1, key2: 2 }), {
      key3: 1,
      key2: 2,
    });
    assert.deepEqual(RA.renameKey('key1', 'key3')({ key1: 1, key2: 2 }), {
      key3: 1,
      key2: 2,
    });
  });
});
