import { assert } from 'chai';
import * as R from 'ramda';

import BigInt from './shared/BigInt.js';
import * as RA from '../src/index.js';

describe('toNumber', function () {
  context('given a number', function () {
    specify('should return a number', function () {
      assert.strictEqual(RA.toNumber('123'), 123);
      assert.strictEqual(RA.toNumber(123), 123);
      assert.strictEqual(RA.toNumber(12e3), 12e3);
      assert.strictEqual(RA.toNumber(Infinity), Infinity);
      assert.strictEqual(RA.toNumber(+Infinity), +Infinity);
      assert.strictEqual(RA.toNumber(-Infinity), -Infinity);
    });
  });

  context('given a bigint value', function () {
    specify('should return a number', function () {
      assert.strictEqual(
        RA.toNumber(BigInt(9007199254740991)),
        9007199254740991
      );
    });
  });

  context('given a boolean value', function () {
    context('given false', function () {
      specify('should return 0', function () {
        assert.strictEqual(RA.toNumber(false), 0);
      });
    });

    context('given true', function () {
      specify('should return 1', function () {
        assert.strictEqual(RA.toNumber(true), 1);
      });
    });
  });

  context('given null', function () {
    specify('should return 0', function () {
      assert.strictEqual(RA.toNumber(null), 0);
    });
  });

  context('given undefined', function () {
    specify('should return NaN', function () {
      assert.isNaN(RA.toNumber(undefined));
    });
  });

  context('given a string that cannot be parsed to a number', function () {
    specify('should return NaN', function () {
      assert.isNaN(RA.toNumber('abc'));
    });
  });

  context('given a symbol', function () {
    specify('should return NaN', function () {
      assert.isNaN(RA.toNumber(Symbol.for('test')));
    });
  });

  context('given an object', function () {
    context('and defined as object literal', function () {
      specify('should return NaN', function () {
        assert.isNaN(RA.toNumber({}));
      });
    });

    context('and defined as object with no prototype', function () {
      specify('should return NaN', function () {
        assert.isNaN(RA.toNumber(Object.create(null)));
      });
    });

    context('and defined with toString method', function () {
      specify('should use result of toString method for coercion', function () {
        const obj = {
          toString() {
            return '1';
          },
        };

        assert.strictEqual(RA.toNumber(obj), 1);
      });
    });

    context('and defined with valueOf method', function () {
      specify('should use result of valueOf method for coercion', function () {
        const obj = {
          valueOf() {
            return '2';
          },
        };

        assert.strictEqual(RA.toNumber(obj), 2);
      });
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const toNumber = RA.toNumber(R.__);

    assert.strictEqual(toNumber(3.2), 3.2);
  });
});
