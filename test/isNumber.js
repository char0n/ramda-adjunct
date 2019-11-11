import { assert } from 'chai';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNumber', function() {
  it('tests a value for `Number`', function() {
    assert.isTrue(RA.isNumber(0));
    assert.isTrue(RA.isNumber(0.1));
    assert.isTrue(RA.isNumber(Object(0)));
    assert.isTrue(RA.isNumber(Object(0.1)));
    assert.isTrue(RA.isNumber(NaN));
    assert.isTrue(RA.isNumber(Infinity));
    assert.isTrue(RA.isNumber(-Infinity));
    assert.isTrue(RA.isNumber(MAX_SAFE_INTEGER));
    assert.isTrue(RA.isNumber(MIN_SAFE_INTEGER));
    assert.isTrue(RA.isNumber(Number.MAX_VALUE));
    assert.isTrue(RA.isNumber(Number.MIN_VALUE));

    assert.isFalse(RA.isNumber(new Date()));
    assert.isFalse(RA.isNumber(args));
    assert.isFalse(RA.isNumber([1, 2, 3]));
    assert.isFalse(RA.isNumber(Object(false)));
    assert.isFalse(RA.isNumber(new Error()));
    assert.isFalse(RA.isNumber(RA));
    assert.isFalse(RA.isNumber(Array.prototype.slice));
    assert.isFalse(RA.isNumber({ a: 1 }));
    assert.isFalse(RA.isNumber(/x/));
    assert.isFalse(RA.isNumber(Object('a')));

    if (Symbol !== 'undefined') {
      assert.isFalse(RA.isNumber(Symbol));
    }

    assert.isFalse(RA.isNumber(null));
    assert.isFalse(RA.isNumber(undefined));
  });
});
