import { assert } from 'chai';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNotNumber', function() {
  it('tests a value for complement of `Number`', function() {
    assert.isFalse(RA.isNotNumber(0));
    assert.isFalse(RA.isNotNumber(0.1));
    assert.isFalse(RA.isNotNumber(Object(0)));
    assert.isFalse(RA.isNotNumber(Object(0.1)));
    assert.isFalse(RA.isNotNumber(NaN));
    assert.isFalse(RA.isNotNumber(Infinity));
    assert.isFalse(RA.isNotNumber(-Infinity));
    assert.isFalse(RA.isNotNumber(MAX_SAFE_INTEGER));
    assert.isFalse(RA.isNotNumber(MIN_SAFE_INTEGER));
    assert.isFalse(RA.isNotNumber(Number.MAX_VALUE));
    assert.isFalse(RA.isNotNumber(Number.MIN_VALUE));

    assert.isTrue(RA.isNotNumber(new Date()));
    assert.isTrue(RA.isNotNumber(args));
    assert.isTrue(RA.isNotNumber([1, 2, 3]));
    assert.isTrue(RA.isNotNumber(Object(true)));
    assert.isTrue(RA.isNotNumber(new Error()));
    assert.isTrue(RA.isNotNumber(RA));
    assert.isTrue(RA.isNotNumber(Array.prototype.slice));
    assert.isTrue(RA.isNotNumber({ a: 1 }));
    assert.isTrue(RA.isNotNumber(/x/));
    assert.isTrue(RA.isNotNumber(Object('a')));

    if (Symbol !== 'undefined') {
      assert.isTrue(RA.isNotNumber(Symbol));
    }

    assert.isTrue(RA.isNotNumber(null));
    assert.isTrue(RA.isNotNumber(undefined));
  });
});
