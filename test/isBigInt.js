import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/ponyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/ponyfills/Number.MIN_SAFE_INTEGER';
import BigInt from './shared/BigInt';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isBigInt', function () {
  if (BigInt !== undefined) {
    context('given a big integer value', function () {
      specify('should return true', function () {
        assert.isTrue(RA.isBigInt(BigInt(9007199254740991)));
        assert.isTrue(RA.isBigInt(BigInt(-9007199254740991)));
        assert.isTrue(RA.isBigInt(BigInt('9007199254740991')));
        assert.isTrue(RA.isBigInt(BigInt(10)));
        assert.isTrue(RA.isBigInt(BigInt(-10)));
        assert.isTrue(RA.isBigInt(BigInt(0)));
        assert.isTrue(RA.isBigInt(BigInt(-0)));
        assert.isTrue(RA.isBigInt(BigInt(MAX_SAFE_INTEGER)));
        assert.isTrue(RA.isBigInt(BigInt(MIN_SAFE_INTEGER)));
        assert.isTrue(RA.isBigInt(BigInt(Number.MAX_VALUE)));
        assert.isTrue(RA.isBigInt(BigInt('0x1fffffffffffff')));
        assert.isTrue(
          RA.isBigInt(
            BigInt('0b11111111111111111111111111111111111111111111111111111')
          )
        );
      });
    });
  }

  context('given a non-big-integer value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isBigInt(new Date()));
      assert.isFalse(RA.isBigInt(args));
      assert.isFalse(RA.isBigInt([1, 2, 3]));
      assert.isFalse(RA.isBigInt(Object(false)));
      assert.isFalse(RA.isBigInt(new Error()));
      assert.isFalse(RA.isBigInt(RA));
      assert.isFalse(RA.isBigInt(Array.prototype.slice));
      assert.isFalse(RA.isBigInt({ a: 1 }));
      assert.isFalse(RA.isBigInt(/x/));
      assert.isFalse(RA.isBigInt(Object('a')));
      assert.isFalse(RA.isBigInt('a string'));
      assert.isFalse(RA.isBigInt(0));
      assert.isFalse(RA.isBigInt(1));
      assert.isFalse(RA.isBigInt(-1));
      assert.isFalse(RA.isBigInt(0.1));
      assert.isFalse(RA.isBigInt(-0.1));
      assert.isFalse(RA.isBigInt(Infinity));
      assert.isFalse(RA.isBigInt(-Infinity));
      assert.isFalse(RA.isBigInt(9007199254740991));
      assert.isFalse(RA.isBigInt('9007199254740991'));
      assert.isFalse(RA.isBigInt(MAX_SAFE_INTEGER));
      assert.isFalse(RA.isBigInt(MIN_SAFE_INTEGER));
      assert.isFalse(RA.isBigInt(Number.MAX_VALUE));
      assert.isFalse(RA.isBigInt(Number.MIN_VALUE));
      assert.isFalse(RA.isBigInt(NaN));
      assert.isFalse(RA.isBigInt(Object(0)));
      assert.isFalse(RA.isBigInt(Object(0.1)));

      if (Symbol !== 'undefined') {
        assert.isFalse(RA.isBigInt(Symbol));
      }

      assert.isFalse(RA.isBigInt(null));
      assert.isFalse(RA.isBigInt(undefined));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isBigInt = RA.isBigInt(R.__);

    assert.isFalse(isBigInt(1));
  });
});
