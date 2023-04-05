import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';

describe('ceil', function () {
  it('should ceil float to nearest integer', function () {
    assert.strictEqual(RA.ceil(0.9), 1);
    assert.strictEqual(RA.ceil(5.95), 6);
    assert.strictEqual(RA.ceil(5.5), 6);
    assert.strictEqual(RA.ceil(5.05), 6);
    assert.strictEqual(RA.ceil(-5.05), -5);
    assert.strictEqual(RA.ceil(-5.5), -5);
    assert.strictEqual(RA.ceil(-5.95), -5);
  });

  context('given integer number', function () {
    specify('should return original integer number', function () {
      assert.strictEqual(RA.ceil(0), 0);
      assert.strictEqual(RA.ceil(1), 1);
      assert.strictEqual(RA.ceil(-1), -1);
    });
  });

  context('given value that is not a number', function () {
    specify('should return NaN', function () {
      assert.isNaN(RA.ceil(undefined));
      assert.isNaN(RA.ceil(NaN));
      assert.isNaN(RA.ceil({}));
      assert.isNaN(RA.ceil(/a/));
      assert.isNaN(RA.ceil('test'));
      assert.isNaN(RA.ceil(new Error()));
    });
  });

  context('given null', function () {
    specify('should return 0', function () {
      assert.strictEqual(RA.ceil(null), 0);
    });
  });

  context('given Symbol value', function () {
    specify('should throw TypeError', function () {
      let shouldThrow;
      try {
        Math.ceil(Symbol(''));
        shouldThrow = false;
      } catch (e) {
        shouldThrow = true;
      }

      if (shouldThrow) {
        assert.throw(() => RA.ceil(Symbol('')));
      }
    });
  });

  context('given valid date object', function () {
    specify(
      'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
      function () {
        assert.strictEqual(RA.ceil(new Date(2)), 2);
      }
    );
  });

  context('given Infinity value', function () {
    specify('should return untouched Infinity value', function () {
      assert.strictEqual(RA.ceil(Infinity), Infinity);
      assert.strictEqual(RA.ceil(-Infinity), -Infinity);
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const ceil = RA.ceil(R.__);

    assert.strictEqual(ceil(0.9), 1);
  });
});
