import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import { isNaNPolyfill } from '../src/isNaN';

describe('isNotNaN', function() {
  it('should test value for complement of `NaN`', function() {
    assert.isFalse(RA.isNotNaN(NaN));
    assert.isFalse(RA.isNotNaN(Number.NaN));
    assert.isFalse(RA.isNotNaN(0 / 0));

    assert.isTrue(RA.isNotNaN('NaN'));
    assert.isTrue(RA.isNotNaN(undefined));
    assert.isTrue(RA.isNotNaN({}));
    assert.isTrue(RA.isNotNaN('blabla'));

    assert.isTrue(RA.isNotNaN(true));
    assert.isTrue(RA.isNotNaN(null));
    assert.isTrue(RA.isNotNaN(37));
    assert.isTrue(RA.isNotNaN('37'));
    assert.isTrue(RA.isNotNaN('37.37'));
    assert.isTrue(RA.isNotNaN(''));
    assert.isTrue(RA.isNotNaN(' '));
  });

  specify('should support placeholder to specify "gaps"', function() {
    const isNotNaN = RA.isNotNaN(R.__);

    assert.isFalse(isNotNaN(NaN));
  });

  context('isNotNaNPolyfill', function() {
    const isNotNaNpolyfill = R.complement(isNaNPolyfill);

    specify('should test polyfill for a `NaN', function() {
      assert.isFalse(isNotNaNpolyfill(NaN));
      assert.isFalse(isNotNaNpolyfill(Number.NaN));
      assert.isFalse(isNotNaNpolyfill(0 / 0));

      // e.g. these would have been true with global isNaN().
      assert.isTrue(isNotNaNpolyfill('NaN'));
      assert.isTrue(isNotNaNpolyfill(undefined));
      assert.isTrue(isNotNaNpolyfill({}));
      assert.isTrue(isNotNaNpolyfill('blabla'));

      assert.isTrue(isNotNaNpolyfill(true));
      assert.isTrue(isNotNaNpolyfill(null));
      assert.isTrue(isNotNaNpolyfill(37));
      assert.isTrue(isNotNaNpolyfill('37'));
      assert.isTrue(isNotNaNpolyfill('37.37'));
      assert.isTrue(isNotNaNpolyfill(''));
      assert.isTrue(isNotNaNpolyfill(' '));
    });

    specify('should support placeholder to specify "gaps"', function() {
      const should = isNotNaNpolyfill(R.__);

      assert.isFalse(should(NaN));
    });
  });
});
