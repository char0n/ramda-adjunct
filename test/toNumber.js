import { assert } from 'chai';
import * as R from 'ramda';

import BigInt from './shared/BigInt';
import * as RA from '../src';

describe('toNumber', function () {
  context(
    'given a [non NaN] number or a number-convertible value',
    function () {
      specify('should return a [non NaN] number', function () {
        let result = RA.toNumber(12);
        assert.isNumber(result);
        assert.isNotNaN(result);

        result = RA.toNumber(new Number(12));
        assert.isNumber(result);
        assert.isNotNaN(result);

        result = RA.toNumber(12e3);
        assert.isNumber(result);
        assert.isNotNaN(result);

        result = RA.toNumber(Infinity);
        assert.isNumber(result);
        assert.isNotNaN(result);

        result = RA.toNumber(12.9);
        assert.isNumber(result);
        assert.isNotNaN(result);

        result = RA.toNumber(-12);
        assert.isNumber(result);
        assert.isNotNaN(result);

        result = RA.toNumber('12');
        assert.isNumber(result);
        assert.isNotNaN(result);

        result = RA.toNumber(null);
        assert.isNumber(result);
        assert.isNotNaN(result);

        result = RA.toNumber([]);
        assert.isNumber(result);
        assert.isNotNaN(result);

        result = RA.toNumber([1]);
        assert.isNumber(result);
        assert.isNotNaN(result);

        result = RA.toNumber(true);
        assert.isNumber(result);
        assert.isNotNaN(result);

        result = RA.toNumber(false);
        assert.isNumber(result);
        assert.isNotNaN(result);

        if (BigInt !== undefined) {
          result = RA.toNumber(BigInt(1234));
          assert.isNumber(result);
          assert.isNotNaN(result);
        }
      });
    }
  );

  context('given NaN or a non-number-convertible value', function () {
    specify('should return NaN', function () {
      assert.isNaN(RA.toNumber(NaN));
      assert.isNaN(RA.toNumber(undefined));
      assert.isNaN(RA.toNumber('not a number'));
      assert.isNaN(RA.toNumber({}));
      assert.isNaN(RA.toNumber([1, 2]));
      assert.isNaN(RA.toNumber(() => {}));
      assert.isNaN(RA.toNumber(Object.create(null)));
      assert.isNaN(RA.toNumber(Symbol.for('')));
      assert.isNaN(RA.toNumber(new Set()));
      assert.isNaN(RA.toNumber(new Map()));
      assert.isNaN(RA.toNumber(/my regex/gi));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const toNumber = RA.toNumber(R.__);

    assert.isNumber(toNumber(1));
    assert.isNotNaN(toNumber(1));

    assert.isNaN(toNumber({}));
  });
});
