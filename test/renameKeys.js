import { assert } from 'chai';

import * as RA from '../src';

describe('renameKeys', function() {
  it('tests renaming object keys', function() {
    assert.deepEqual(
      RA.renameKeys({ key1: 'key2', key2: 'key3' }, { key1: 1, key2: 2 }),
      {
        key2: 1,
        key3: 2,
      }
    );
  });

  it('tests renaming non existing keys', function() {
    assert.deepEqual(RA.renameKeys({ nonExistingKey: 'key2' }, { key1: 1 }), {
      key1: 1,
    });
  });

  it('tests renaming keys on non object', function() {
    assert.deepEqual(RA.renameKeys({ key1: 'key2' }, null), {});
    assert.deepEqual(RA.renameKeys({ key1: 'key2' }, undefined), {});
  });

  it('tests currying', function() {
    assert.deepEqual(
      RA.renameKeys({ key1: 'key2', key2: 'key3' }, { key1: 1, key2: 2 }),
      {
        key2: 1,
        key3: 2,
      }
    );
    assert.deepEqual(
      RA.renameKeys({ key1: 'key2', key2: 'key3' })({ key1: 1, key2: 2 }),
      {
        key2: 1,
        key3: 2,
      }
    );
  });
});
