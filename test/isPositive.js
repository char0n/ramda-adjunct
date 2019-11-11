import { assert } from 'chai';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isPositive', function() {
  it('tests a value for positive `Number`', function() {
    assert.isFalse(RA.isPositive(0));
    assert.isTrue(RA.isPositive(0.1));
    assert.isFalse(RA.isPositive(Object(0)));
    assert.isTrue(RA.isPositive(Object(0.1)));
    assert.isFalse(RA.isPositive(NaN));
    assert.isTrue(RA.isPositive(Infinity));
    assert.isFalse(RA.isPositive(-Infinity));
    assert.isTrue(RA.isPositive(MAX_SAFE_INTEGER));
    assert.isFalse(RA.isPositive(MIN_SAFE_INTEGER));
    assert.isTrue(RA.isPositive(Number.MAX_VALUE));
    assert.isTrue(RA.isPositive(Number.MIN_VALUE));

    assert.isFalse(RA.isPositive(new Date()));
    assert.isFalse(RA.isPositive(args));
    assert.isFalse(RA.isPositive([1, 2, 3]));
    assert.isFalse(RA.isPositive(Object(false)));
    assert.isFalse(RA.isPositive(new Error()));
    assert.isFalse(RA.isPositive(RA));
    assert.isFalse(RA.isPositive(Array.prototype.slice));
    assert.isFalse(RA.isPositive({ a: 1 }));
    assert.isFalse(RA.isPositive(/x/));
    assert.isFalse(RA.isPositive(Object('a')));

    if (Symbol !== 'undefined') {
      assert.isFalse(RA.isPositive(Symbol));
    }

    assert.isFalse(RA.isPositive(null));
    assert.isFalse(RA.isPositive(undefined));
  });
});
