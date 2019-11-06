import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import polyfill from '../src/internal/polyfills/Number.isFinite';

describe('isFinite', function() {
  it('should test value for a finite `Number`', function() {
    assert.isFalse(RA.isFinite(Infinity));
    assert.isFalse(RA.isFinite(NaN));
    assert.isFalse(RA.isFinite(-Infinity));

    assert.isTrue(RA.isFinite(0));
    assert.isTrue(RA.isFinite(-0));
    assert.isTrue(RA.isFinite(2e64));
    assert.isTrue(RA.isFinite(324234));
    assert.isTrue(RA.isFinite(1.2342));

    // Would've been true with global isFinite('0').
    assert.isFalse(RA.isFinite('0'));

    // Would've been true with global isFinite(null).
    assert.isFalse(RA.isFinite(null));
  });

  it('should test polyfill for a finite `Number', function() {
    assert.isFalse(polyfill(Infinity));
    assert.isFalse(polyfill(NaN));
    assert.isFalse(polyfill(-Infinity));

    assert.isTrue(polyfill(0));
    assert.isTrue(polyfill(-0));
    assert.isTrue(polyfill(2e64));
    assert.isTrue(polyfill(324234));
    assert.isTrue(polyfill(1.2342));

    // Would've been true with global isFinite('0').
    assert.isFalse(polyfill('0'));

    // Would've been true with global isFinite(null).
    assert.isFalse(polyfill(null));
  });

  it('should support placeholder to specify "gaps"', function() {
    const isFinite = RA.isFinite(R.__);

    assert.isTrue(isFinite(1));
  });
});
