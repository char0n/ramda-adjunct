import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import ponyfill from '../src/internal/ponyfills/Number.isFinite.js';

describe('isFinite', function () {
  it('should test value for a finite `Number`', function () {
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

  it('should test ponyfill for a finite `Number', function () {
    assert.isFalse(ponyfill(Infinity));
    assert.isFalse(ponyfill(NaN));
    assert.isFalse(ponyfill(-Infinity));

    assert.isTrue(ponyfill(0));
    assert.isTrue(ponyfill(-0));
    assert.isTrue(ponyfill(2e64));
    assert.isTrue(ponyfill(324234));
    assert.isTrue(ponyfill(1.2342));

    // Would've been true with global isFinite('0').
    assert.isFalse(ponyfill('0'));

    // Would've been true with global isFinite(null).
    assert.isFalse(ponyfill(null));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isFinite = RA.isFinite(R.__);

    assert.isTrue(isFinite(1));
  });
});
