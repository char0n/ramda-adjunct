import { concat } from 'ramda';

import * as RA from '../src/index';
import eq from './shared/eq';

describe('renameKeysWith', function() {
  it('tests renaming object keys', function() {
    eq(RA.renameKeysWith(concat('a'), { key1: 1, key2: 2 }), {
      akey1: 1,
      akey2: 2,
    });
  });

  it('tests renaming keys on nil', function() {
    eq(RA.renameKeysWith(concat('a'), null), {});
    eq(RA.renameKeysWith(concat('a'), undefined), {});
  });

  it('tests currying', function() {
    eq(RA.renameKeysWith(concat('a'))({ key1: 1, key2: 2 }), {
      akey1: 1,
      akey2: 2,
    });
  });
});
