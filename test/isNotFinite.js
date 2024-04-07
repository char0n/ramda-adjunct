import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import { isFinitePonyfill } from '../src/isFinite.js';

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

  context('isFinitePonyfill complement', function () {
    context('given we create complement of the ponyfill', function () {
      const ponyfillC = R.complement(isFinitePonyfill);

      specify(
        'should test a value for complement of finite `Number`',
        function () {
          assert.isTrue(ponyfillC(Infinity));
          assert.isTrue(ponyfillC(NaN));
          assert.isTrue(ponyfillC(-Infinity));

          assert.isFalse(ponyfillC(0));
          assert.isFalse(ponyfillC(-0));
          assert.isFalse(ponyfillC(2e64));
          assert.isFalse(ponyfillC(324234));
          assert.isFalse(ponyfillC(1.2342));

          assert.isTrue(ponyfillC('0'));
          assert.isTrue(ponyfillC(null));
        }
      );

      specify('should support placeholder to specify "gaps"', function () {
        const isNotFinite = ponyfillC(R.__);

        assert.isFalse(isNotFinite(-1));
      });
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotFinite = RA.isNotFinite(R.__);

    assert.isFalse(isNotFinite(-1));
  });
});
