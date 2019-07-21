import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import { isNanPolyfill } from '../src/isNaN';
import eq from './shared/eq';

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

    eq(isNaN(NaN), true);
  });

  context('isNanPolyfill', function() {
    specify('should test polyfill for a `NaN', function() {
      assert.isTrue(isNanPolyfill(NaN));
      assert.isTrue(isNanPolyfill(Number.NaN));
      assert.isTrue(isNanPolyfill(0 / 0));

      // e.g. these would have been true with global isNaN().
      assert.isFalse(isNanPolyfill('NaN'));
      assert.isFalse(isNanPolyfill(undefined));
      assert.isFalse(isNanPolyfill({}));
      assert.isFalse(isNanPolyfill('blabla'));

      assert.isFalse(isNanPolyfill(true));
      assert.isFalse(isNanPolyfill(null));
      assert.isFalse(isNanPolyfill(37));
      assert.isFalse(isNanPolyfill('37'));
      assert.isFalse(isNanPolyfill('37.37'));
      assert.isFalse(isNanPolyfill(''));
      assert.isFalse(isNanPolyfill(' '));
    });

    specify('should support placeholder to specify "gaps"', function() {
      const isNaN = isNanPolyfill(R.__);

      eq(isNaN(NaN), true);
    });
  });
});
