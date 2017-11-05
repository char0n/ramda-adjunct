import * as RA from '../src/index';
import eq from './shared/eq';


describe('renameKeys', function() {
  it('tests renaming object keys', function() {
    eq(RA.renameKeys({ key1: 'key2', key2: 'key3' }, { key1: 1, key2: 2 }), { key2: 1, key3: 2 });
  });

  it('tests renaming non existing keys', function() {
    eq(RA.renameKeys({ nonExistingKey: 'key2' }, { key1: 1 }), { key1: 1 });
  });

  it('tests renaming keys on non object', function() {
    eq(RA.renameKeys({ key1: 'key2' }, null), {});
    eq(RA.renameKeys({ key1: 'key2' }, undefined), {});
  });

  it('tests currying', function() {
    eq(RA.renameKeys({ key1: 'key2', key2: 'key3' }, { key1: 1, key2: 2 }), { key2: 1, key3: 2 });
    eq(RA.renameKeys({ key1: 'key2', key2: 'key3' })({ key1: 1, key2: 2 }), { key2: 1, key3: 2 });
  });
});
