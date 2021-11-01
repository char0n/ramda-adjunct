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

  context('given non existing keys', function () {
    specify('should ignore them', function () {
      assert.deepEqual(RA.copyKeys({ nonExistingKey: 'key2' }, { key1: 1 }), {
        key1: 1,
      });
    });

    specify('should create shallow clone', function () {
      const obj = { key1: 1 };

      assert.notStrictEqual(RA.copyKeys({ nonExistingKey: 'key2' }, obj), obj);
    });
  });

  context('given non object value', function () {
    specify('should return empty object', function () {
      assert.deepEqual(RA.copyKeys({ key1: 'key2' }, null), {});
      assert.deepEqual(RA.copyKeys({ key1: 'key2' }, undefined), {});
      assert.deepEqual(RA.copyKeys({ key1: 'key2' }, ''), {});
      assert.deepEqual(RA.copyKeys({ key1: 'key2' }, 3), {});
    });
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
