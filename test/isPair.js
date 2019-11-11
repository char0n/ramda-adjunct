import { assert } from 'chai';

import * as RA from '../src';

describe('isPair', function() {
  it('tests a value for pair', function() {
    assert.isFalse(RA.isPair([]));
    assert.isFalse(RA.isPair([0]));
    assert.isTrue(RA.isPair([0, 1]));
    assert.isFalse(RA.isPair([0, 1, 2]));
    assert.isFalse(RA.isPair(0));
    assert.isFalse(RA.isPair(''));
    assert.isFalse(RA.isPair('foo'));
    assert.isFalse(RA.isPair(false));
    assert.isFalse(RA.isPair(true));
    assert.isFalse(RA.isPair(new Date()));
    assert.isFalse(RA.isPair({ 0: 0, 1: 1 }));
    assert.isFalse(RA.isPair({ foo: 0, bar: 1 }));
  });
});
