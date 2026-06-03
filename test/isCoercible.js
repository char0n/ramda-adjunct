import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('isCoercible', function () {
  it('returns true for numbers', function () {
    assert.isTrue(RA.isCoercible(42));
    assert.isTrue(RA.isCoercible(3.14));
    assert.isTrue(RA.isCoercible(-1));
    assert.isTrue(RA.isCoercible(0));
    assert.isTrue(RA.isCoercible(NaN));
    assert.isTrue(RA.isCoercible(Infinity));
    assert.isTrue(RA.isCoercible(-Infinity));
  });

  it('returns true for strings that can be coerced to numbers', function () {
    assert.isTrue(RA.isCoercible('42'));
    assert.isTrue(RA.isCoercible('3.14'));
  });

  it('returns true for strings that cannot be coerced to a valid number', function () {
    assert.isTrue(RA.isCoercible('hello'));
    assert.isTrue(RA.isCoercible('abc'));
    assert.isTrue(RA.isCoercible('1.2.3'));
    assert.isTrue(RA.isCoercible(' '));
  });

  it('returns false for Symbols', function () {
    assert.isFalse(RA.isCoercible(Symbol('foo')));
    assert.isFalse(RA.isCoercible(Symbol()));
  });

  it('returns true for objects with toString or valueOf methods', function () {
    assert.isTrue(RA.isCoercible({ toString: () => '42' }));
    assert.isTrue(RA.isCoercible({ valueOf: () => 42 }));
    assert.isTrue(RA.isCoercible(new Number(42)));
    assert.isTrue(RA.isCoercible(new String('42')));
  });

  it('returns true for objects with toString or valueOf in prototype chain', function () {
    assert.isTrue(RA.isCoercible({}));
  });

  it('returns false for objects without toString or valueOf in prototype chain', function () {
    assert.isFalse(RA.isCoercible(Object.create(null)));
  });

  it('returns true for null and undefined', function () {
    assert.isTrue(RA.isCoercible(null));
    assert.isTrue(RA.isCoercible(undefined));
  });

  it('returns true for booleans', function () {
    assert.isTrue(RA.isCoercible(true));
    assert.isTrue(RA.isCoercible(false));
  });

  it('returns true for arrays and functions', function () {
    assert.isTrue(RA.isCoercible([]));
    assert.isTrue(RA.isCoercible(function () {}));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isCoercible = RA.isCoercible(R.__);

    assert.isTrue(isCoercible(42));
  });
});
