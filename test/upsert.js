import { assert } from 'chai';

import * as RA from '../src';

describe('upsert', function () {
  console.log(RA.upsert)
  it('should work on objects', function () {
    assert.deepEqual(RA.upsert('key', () => 'new value', () => 'initial value', {}), {key: 'initial value'});
    assert.deepEqual(RA.upsert('key', () => 'new value', () => 'initial value', {key: 'value'}), {key: 'new value'});
  });
  it('should work on arrays', function () {
    assert.deepEqual(RA.upsert(1, () => 'new value', () => 'initial value', []), [, 'initial value']);
    assert.deepEqual(RA.upsert(1, () => 'new value', () => 'initial value', ['first value', 'second vaue']), ['first value', 'new value']);
  });
  it('should work on maps', function () {
    assert.deepEqual(RA.upsert('key', () => 'new value', () => 'initial value', new Map()), new Map([['key', 'initial value']]));
    assert.deepEqual(RA.upsert('key', () => 'new value', () => 'initial value', new Map([['key', 'initial value']])), new Map([['key', 'new value']]));
  });
});
