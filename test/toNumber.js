import { assert } from 'chai';

import BigInt from './shared/BigInt';
import * as RA from '../src';

describe('ToNumber', function () {
  context('given a number', function () {
    specify('should return the number', function () {
      assert.strictEqual(RA.toNumber('123'), 123);
      assert.strictEqual(RA.toNumber(123), 123);
      assert.strictEqual(RA.toNumber(12e3), 12e3);
      assert.strictEqual(RA.toNumber(Infinity), Infinity);
      assert.strictEqual(RA.toNumber(+Infinity), +Infinity);
      assert.strictEqual(RA.toNumber(-Infinity), -Infinity);
    });
  });
  context('given a bigint', function () {
    specify('should return the number', function () {
      assert.strictEqual(
        RA.toNumber(BigInt(9007199254740991)),
        9007199254740991
      );
    });
  });
  context('given a boolean', function () {
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
  context('given a undefined', function () {
    specify('should return NaN', function () {
      assert.isNaN(RA.toNumber(undefined));
    });
  });
  context('given a string', function () {
    specify('should return NaN', function () {
      assert.isNaN(RA.toNumber('abc'));
    });
  });
  context('given a symbol', function () {
    specify('should return a NaN', function () {
      assert.isNaN(RA.toNumber(Symbol.for('test')));
    });
  });
  context('given an object', function () {
    specify('should return a NaN', function () {
      assert.isNaN(RA.toNumber(Object.create(null)));
    });
  });
});
