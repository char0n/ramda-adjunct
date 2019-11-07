import { assert } from 'chai';

import * as RA from '../src';

describe('isNotPair', function() {
  it('tests a value for complement of pair', function() {
    assert.isTrue(RA.isNotPair([]));
    assert.isTrue(RA.isNotPair([0]));
    assert.isFalse(RA.isNotPair([0, 1]));
    assert.isTrue(RA.isNotPair([0, 1, 2]));
    assert.isTrue(RA.isNotPair(0));
    assert.isTrue(RA.isNotPair(''));
    assert.isTrue(RA.isNotPair('foo'));
    assert.isTrue(RA.isNotPair(false));
    assert.isTrue(RA.isNotPair(true));
    assert.isTrue(RA.isNotPair(new Date()));
    assert.isTrue(RA.isNotPair({ 0: 0, 1: 1 }));
    assert.isTrue(RA.isNotPair({ foo: 0, bar: 1 }));
  });
});
