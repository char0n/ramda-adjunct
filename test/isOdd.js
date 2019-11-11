import { assert } from 'chai';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isOdd', function() {
  it('tests a value for odd integer `Number`', function() {
    assert.isFalse(RA.isOdd(0));
    assert.isFalse(RA.isOdd(4));
    assert.isFalse(RA.isOdd(Object(0)));
    assert.isFalse(RA.isOdd(Object(0.1)));
    assert.isFalse(RA.isOdd(NaN));
    assert.isTrue(RA.isOdd(3));
    assert.isTrue(RA.isOdd(7));
    assert.isTrue(RA.isOdd(-3));
    assert.isTrue(RA.isOdd(-7));
    assert.isFalse(RA.isOdd(-Infinity));
    assert.isTrue(RA.isOdd(MAX_SAFE_INTEGER));
    assert.isTrue(RA.isOdd(MIN_SAFE_INTEGER));
    assert.isFalse(RA.isOdd(Number.MAX_VALUE));
    assert.isFalse(RA.isOdd(Number.MIN_VALUE));

    assert.isFalse(RA.isOdd(new Date()));
    assert.isFalse(RA.isOdd(args));
    assert.isFalse(RA.isOdd([1, 2, 3]));
    assert.isFalse(RA.isOdd(Object(false)));
    assert.isFalse(RA.isOdd(new Error()));
    assert.isFalse(RA.isOdd(RA));
    assert.isFalse(RA.isOdd(Array.prototype.slice));
    assert.isFalse(RA.isOdd({ a: 1 }));
    assert.isFalse(RA.isOdd(/x/));
    assert.isFalse(RA.isOdd(Object('a')));

    if (Symbol !== 'undefined') {
      assert.isFalse(RA.isOdd(Symbol));
    }

    assert.isFalse(RA.isOdd(null));
    assert.isFalse(RA.isOdd(undefined));
  });
});
