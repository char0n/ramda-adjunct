import { assert } from 'chai';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNotValidNumber', function() {
  it('tests a value for complement of valid `Number`', function() {
    assert.isFalse(RA.isNotValidNumber(0));
    assert.isFalse(RA.isNotValidNumber(0.1));
    assert.isFalse(RA.isNotValidNumber(-0.1));
    assert.isFalse(RA.isNotValidNumber(1));
    assert.isFalse(RA.isNotValidNumber(-1));
    assert.isFalse(RA.isNotValidNumber(MAX_SAFE_INTEGER));
    assert.isFalse(RA.isNotValidNumber(MIN_SAFE_INTEGER));
    assert.isFalse(RA.isNotValidNumber(Number.MAX_VALUE));
    assert.isFalse(RA.isNotValidNumber(Number.MIN_VALUE));

    assert.isTrue(RA.isNotValidNumber(NaN));
    assert.isTrue(RA.isNotValidNumber(Infinity));
    assert.isTrue(RA.isNotValidNumber(-Infinity));
    assert.isTrue(RA.isNotValidNumber(new Date()));
    assert.isTrue(RA.isNotValidNumber(args));
    assert.isTrue(RA.isNotValidNumber([1, 2, 3]));
    assert.isTrue(RA.isNotValidNumber(Object(true)));
    assert.isTrue(RA.isNotValidNumber(new Error()));
    assert.isTrue(RA.isNotValidNumber(RA));
    assert.isTrue(RA.isNotValidNumber(Array.prototype.slice));
    assert.isTrue(RA.isNotValidNumber({ a: 1 }));
    assert.isTrue(RA.isNotValidNumber(/x/));
    assert.isTrue(RA.isNotValidNumber(Object('a')));

    if (Symbol !== 'undefined') {
      assert.isTrue(RA.isNotValidNumber(Symbol));
    }

    assert.isTrue(RA.isNotValidNumber(null));
    assert.isTrue(RA.isNotValidNumber(undefined));
  });
});
