import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';
import { isNaNPonyfill } from '../src/isNaN.js';

describe('isNotNaN', function () {
  it('should test value for complement of `NaN`', function () {
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

  specify('should support placeholder to specify "gaps"', function () {
    const isNotNaN = RA.isNotNaN(R.__);

    assert.isFalse(isNotNaN(NaN));
  });

  context('isNotNaNPonyfill', function () {
    const isNotNaNponyfill = R.complement(isNaNPonyfill);

    specify('should test ponyfill for a `NaN', function () {
      assert.isFalse(isNotNaNponyfill(NaN));
      assert.isFalse(isNotNaNponyfill(Number.NaN));
      assert.isFalse(isNotNaNponyfill(0 / 0));

      // e.g. these would have been true with global isNaN().
      assert.isTrue(isNotNaNponyfill('NaN'));
      assert.isTrue(isNotNaNponyfill(undefined));
      assert.isTrue(isNotNaNponyfill({}));
      assert.isTrue(isNotNaNponyfill('blabla'));

      assert.isTrue(isNotNaNponyfill(true));
      assert.isTrue(isNotNaNponyfill(null));
      assert.isTrue(isNotNaNponyfill(37));
      assert.isTrue(isNotNaNponyfill('37'));
      assert.isTrue(isNotNaNponyfill('37.37'));
      assert.isTrue(isNotNaNponyfill(''));
      assert.isTrue(isNotNaNponyfill(' '));
    });

    specify('should support placeholder to specify "gaps"', function () {
      const should = isNotNaNponyfill(R.__);

      assert.isFalse(should(NaN));
    });
  });
});
