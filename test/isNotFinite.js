import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import { isFinitePolyfill } from '../src/isFinite';

describe('isNotFinite', function () {
  it('should test a value for complement of finite `Number`', function () {
    assert.isTrue(RA.isNotFinite(Infinity));
    assert.isTrue(RA.isNotFinite(NaN));
    assert.isTrue(RA.isNotFinite(-Infinity));

    assert.isFalse(RA.isNotFinite(0));
    assert.isFalse(RA.isNotFinite(-0));
    assert.isFalse(RA.isNotFinite(2e64));
    assert.isFalse(RA.isNotFinite(324234));
    assert.isFalse(RA.isNotFinite(1.2342));

    assert.isTrue(RA.isNotFinite('0'));
    assert.isTrue(RA.isNotFinite(null));
  });

  context('isFinitePolyfill complement', function () {
    context('given we create complement of the polyfill', function () {
      const polyfillC = R.complement(isFinitePolyfill);

      specify(
        'should test a value for complement of finite `Number`',
        function () {
          assert.isTrue(polyfillC(Infinity));
          assert.isTrue(polyfillC(NaN));
          assert.isTrue(polyfillC(-Infinity));

          assert.isFalse(polyfillC(0));
          assert.isFalse(polyfillC(-0));
          assert.isFalse(polyfillC(2e64));
          assert.isFalse(polyfillC(324234));
          assert.isFalse(polyfillC(1.2342));

          assert.isTrue(polyfillC('0'));
          assert.isTrue(polyfillC(null));
        }
      );

      specify('should support placeholder to specify "gaps"', function () {
        const isNotFinite = polyfillC(R.__);

        assert.isFalse(isNotFinite(-1));
      });
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotFinite = RA.isNotFinite(R.__);

    assert.isFalse(isNotFinite(-1));
  });
});
