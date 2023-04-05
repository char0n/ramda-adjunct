import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER';
import args from './shared/arguments';

describe('isNegative', function () {
  it('should test value for a negative `Number`', function () {
    assert.isFalse(RA.isNegative(0));
    assert.isTrue(RA.isNegative(-0.1));
    assert.isFalse(RA.isNegative(Object(0)));
    assert.isTrue(RA.isNegative(Object(-0.1)));
    assert.isFalse(RA.isNegative(NaN));
    assert.isFalse(RA.isNegative(Infinity));
    assert.isTrue(RA.isNegative(-Infinity));
    assert.isFalse(RA.isNegative(MAX_SAFE_INTEGER));
    assert.isTrue(RA.isNegative(MIN_SAFE_INTEGER));
    assert.isFalse(RA.isNegative(Number.MAX_VALUE));
    assert.isFalse(RA.isNegative(Number.MIN_VALUE));

    assert.isFalse(RA.isNegative(new Date()));
    assert.isFalse(RA.isNegative(args));
    assert.isFalse(RA.isNegative([1, 2, 3]));
    assert.isFalse(RA.isNegative(Object(false)));
    assert.isFalse(RA.isNegative(new Error()));
    assert.isFalse(RA.isNegative(RA));
    assert.isFalse(RA.isNegative(Array.prototype.slice));
    assert.isFalse(RA.isNegative({ a: 1 }));
    assert.isFalse(RA.isNegative(/x/));
    assert.isFalse(RA.isNegative(Object('a')));
    assert.isFalse(RA.isNegative(Symbol));
    assert.isFalse(RA.isNegative(null));
    assert.isFalse(RA.isNegative(undefined));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNegative = RA.isNegative(R.__);

    assert.isTrue(isNegative(-1));
  });
});
