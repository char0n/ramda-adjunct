import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import { isNaNPolyfill } from '../src/isNaN';

describe('isNaN', function() {
  it('should test value for a `NaN`', function() {
    assert.isTrue(RA.isNaN(NaN));
    assert.isTrue(RA.isNaN(Number.NaN));
    assert.isTrue(RA.isNaN(0 / 0));

    // e.g. these would have been true with global isNaN().
    assert.isFalse(RA.isNaN('NaN'));
    assert.isFalse(RA.isNaN(undefined));
    assert.isFalse(RA.isNaN({}));
    assert.isFalse(RA.isNaN('blabla'));

    assert.isFalse(RA.isNaN(true));
    assert.isFalse(RA.isNaN(null));
    assert.isFalse(RA.isNaN(37));
    assert.isFalse(RA.isNaN('37'));
    assert.isFalse(RA.isNaN('37.37'));
    assert.isFalse(RA.isNaN(''));
    assert.isFalse(RA.isNaN(' '));
  });

  it('should support placeholder to specify "gaps"', function() {
    const isNaN = RA.isNaN(R.__);

    assert.isTrue(isNaN(NaN));
  });

  context('isNaNPolyfill', function() {
    specify('should test polyfill for a `NaN', function() {
      assert.isTrue(isNaNPolyfill(NaN));
      assert.isTrue(isNaNPolyfill(Number.NaN));
      assert.isTrue(isNaNPolyfill(0 / 0));

      // e.g. these would have been true with global isNaN().
      assert.isFalse(isNaNPolyfill('NaN'));
      assert.isFalse(isNaNPolyfill(undefined));
      assert.isFalse(isNaNPolyfill({}));
      assert.isFalse(isNaNPolyfill('blabla'));

      assert.isFalse(isNaNPolyfill(true));
      assert.isFalse(isNaNPolyfill(null));
      assert.isFalse(isNaNPolyfill(37));
      assert.isFalse(isNaNPolyfill('37'));
      assert.isFalse(isNaNPolyfill('37.37'));
      assert.isFalse(isNaNPolyfill(''));
      assert.isFalse(isNaNPolyfill(' '));
    });

    specify('should support placeholder to specify "gaps"', function() {
      const isNaN = isNaNPolyfill(R.__);

      assert.isTrue(isNaN(NaN));
    });
  });
});
