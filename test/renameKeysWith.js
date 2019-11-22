import { assert } from 'chai';
import { concat } from 'ramda';

import * as RA from '../src';

describe('renameKeysWith', function() {
  it('tests renaming object keys', function() {
    assert.deepEqual(RA.renameKeysWith(concat('a'), { key1: 1, key2: 2 }), {
      akey1: 1,
      akey2: 2,
    });
  });

  it('tests renaming keys on nil', function() {
    assert.deepEqual(RA.renameKeysWith(concat('a'), null), {});
    assert.deepEqual(RA.renameKeysWith(concat('a'), undefined), {});
  });

  it('tests currying', function() {
    assert.deepEqual(RA.renameKeysWith(concat('a'))({ key1: 1, key2: 2 }), {
      akey1: 1,
      akey2: 2,
    });
  });
});
