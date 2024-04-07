import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';
import { isNaNPonyfill } from '../src/isNaN.js';

describe('isNaN', function () {
  it('should test value for a `NaN`', function () {
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

  it('should support placeholder to specify "gaps"', function () {
    const isNaN = RA.isNaN(R.__);

    assert.isTrue(isNaN(NaN));
  });

  context('isNaNPonyfill', function () {
    specify('should test ponyfill for a `NaN', function () {
      assert.isTrue(isNaNPonyfill(NaN));
      assert.isTrue(isNaNPonyfill(Number.NaN));
      assert.isTrue(isNaNPonyfill(0 / 0));

      // e.g. these would have been true with global isNaN().
      assert.isFalse(isNaNPonyfill('NaN'));
      assert.isFalse(isNaNPonyfill(undefined));
      assert.isFalse(isNaNPonyfill({}));
      assert.isFalse(isNaNPonyfill('blabla'));

      assert.isFalse(isNaNPonyfill(true));
      assert.isFalse(isNaNPonyfill(null));
      assert.isFalse(isNaNPonyfill(37));
      assert.isFalse(isNaNPonyfill('37'));
      assert.isFalse(isNaNPonyfill('37.37'));
      assert.isFalse(isNaNPonyfill(''));
      assert.isFalse(isNaNPonyfill(' '));
    });

    specify('should support placeholder to specify "gaps"', function () {
      const isNaN = isNaNPonyfill(R.__);

      assert.isTrue(isNaN(NaN));
    });
  });
});
