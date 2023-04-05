import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER';
import args from './shared/arguments';

describe('isEven', function () {
  it('should test value for an even integer `Number`', function () {
    assert.isTrue(RA.isEven(0));
    assert.isTrue(RA.isEven(4));
    assert.isFalse(RA.isEven(Object(4)));
    assert.isFalse(RA.isEven(Object(0.1)));
    assert.isTrue(RA.isEven(Number(6)));
    assert.isFalse(RA.isEven(new Number(6)));
    assert.isFalse(RA.isEven(NaN));
    assert.isFalse(RA.isEven(3));
    assert.isFalse(RA.isEven(7));
    assert.isFalse(RA.isEven(-3));
    assert.isFalse(RA.isEven(-7));
    assert.isFalse(RA.isEven(-Infinity));
    assert.isFalse(RA.isEven(MAX_SAFE_INTEGER));
    assert.isFalse(RA.isEven(MIN_SAFE_INTEGER));
    assert.isTrue(RA.isEven(Number.MAX_VALUE));
    assert.isFalse(RA.isEven(Number.MIN_VALUE));

    assert.isFalse(RA.isEven(new Date()));
    assert.isFalse(RA.isEven(args));
    assert.isFalse(RA.isEven([1, 2, 3]));
    assert.isFalse(RA.isEven(Object(false)));
    assert.isFalse(RA.isEven(new Error()));
    assert.isFalse(RA.isEven(RA));
    assert.isFalse(RA.isEven(Array.prototype.slice));
    assert.isFalse(RA.isEven({ a: 1 }));
    assert.isFalse(RA.isEven(/x/));
    assert.isFalse(RA.isEven(Object('a')));
    assert.isFalse(RA.isEven(Symbol));
    assert.isFalse(RA.isOdd(null));
    assert.isFalse(RA.isOdd(undefined));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isEven = RA.isEven(R.__);

    assert.isTrue(isEven(2));
  });
});
