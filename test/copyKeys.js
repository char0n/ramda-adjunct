import { assert } from 'chai';

import * as RA from '../src';

describe('copyKeys', function () {
  it('should copy object keys', function () {
    assert.deepEqual(
      RA.copyKeys(
        { key1: 'key2', key2: 'key3' },
        { key1: 1, key2: 2, key4: 4 }
      ),
      {
        key1: 1,
        key2: 1,
        key3: 2,
        key4: 4,
      }
    );
  });

  it('should ignore non existing keys', function () {
    assert.deepEqual(RA.copyKeys({ nonExistingKey: 'key2' }, { key1: 1 }), {
      key1: 1,
    });
  });

  it('should return an empty object when it copies keys on null and undefined', function () {
    assert.deepEqual(RA.copyKeys({ key1: 'key2' }, null), {});
    assert.deepEqual(RA.copyKeys({ key1: 'key2' }, undefined), {});
  });

  it('should be curried', function () {
    assert.deepEqual(
      RA.copyKeys({ key1: 'key2', key2: 'key3' }, { key1: 1, key2: 2 }),
      {
        key1: 1,
        key2: 1,
        key3: 2,
      }
    );
    assert.deepEqual(
      RA.copyKeys({ key1: 'key2', key2: 'key3' })({ key1: 1, key2: 2 }),
      {
        key1: 1,
        key2: 1,
        key3: 2,
      }
    );
  });
});
