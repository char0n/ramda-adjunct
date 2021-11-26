import { assert } from 'chai';

import * as RA from '../src';

describe('ToNumber', function () {
  context('given a number', function () {
    specify('should return the number', function () {
      assert.strictEqual(RA.toNumber('123'), 123);
      assert.strictEqual(RA.toNumber(123), 123);
      assert.strictEqual(RA.toNumber(12e3), 12e3);
    });
  });
  context('given a invalid number', function () {
    specify('should return a NaN', function () {
      assert.isNaN(RA.toNumber('abc'));
      assert.isNaN(RA.toNumber(Symbol.for('test')));
      assert.isNaN(RA.toNumber(Object.create(null)));
      assert.isNaN(RA.toNumber(undefined));
    });
    specify('should return 0', function () {
      assert.strictEqual(RA.toNumber(null), 0);
    });
  });
});
