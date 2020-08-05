import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import Symbol from './shared/Symbol';

describe('roundTo', function () {
  it('should round value to nearest multiple of base', function () {
    assert.strictEqual(RA.roundTo(1, 0.9), 1);
    assert.strictEqual(RA.roundTo(2, 11), 12);
    assert.strictEqual(RA.roundTo(3, 11), 12);
    assert.strictEqual(RA.roundTo(4, 11), 12);
    assert.strictEqual(RA.roundTo(0.5, 3.5), 3.5);
    assert.strictEqual(RA.roundTo(0.5, 3.7), 3.5);
    assert.strictEqual(RA.roundTo(0.5, 3.75), 4);
    assert.strictEqual(RA.roundTo(1, 5.95), 6);
    assert.strictEqual(RA.roundTo(1, 5.5), 6);
    assert.strictEqual(RA.roundTo(1, 5.05), 5);
    assert.strictEqual(RA.roundTo(-1, -5.05), -5);
    assert.strictEqual(RA.roundTo(-5, -5.05), -5);
    assert.strictEqual(RA.roundTo(-1, -5.5), -5);
    assert.strictEqual(RA.roundTo(-1, -5.95), -6);
  });

  context('given integer number and 1 as the base', function () {
    specify('should return original integer number', function () {
      assert.strictEqual(RA.roundTo(1, 0), 0);
      assert.strictEqual(RA.roundTo(1, 1), 1);
      assert.strictEqual(RA.roundTo(1, -1), -1);
    });
  });

  context('given value that is not a number', function () {
    specify('should return NaN', function () {
      assert.isNaN(RA.roundTo(1, undefined));
      assert.isNaN(RA.roundTo(1, NaN));
      assert.isNaN(RA.roundTo(1, {}));
      assert.isNaN(RA.roundTo(1, /a/));
      assert.isNaN(RA.roundTo(1, 'test'));
      assert.isNaN(RA.roundTo(1, new Error()));
    });
  });

  context('given null as the value to be rounded', function () {
    specify('should return 0', function () {
      assert.strictEqual(RA.roundTo(1, null), 0);
    });
  });

  context('given Symbol as the value to be rounded', function () {
    specify('should throw TypeError', function () {
      let shouldThrow;
      try {
        Math.roundTo(1, Symbol(''));
        shouldThrow = false;
      } catch (e) {
        shouldThrow = true;
      }

      if (shouldThrow) {
        assert.throw(() => RA.roundTo(1, Symbol('')));
      }
    });
  });

  context('given valid date object', function () {
    specify(
      'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
      function () {
        assert.strictEqual(RA.roundTo(1, new Date(2)), 2);
      }
    );
  });

  context('given Infinity value to be rounded', function () {
    specify('should return untouched Infinity value', function () {
      assert.strictEqual(RA.roundTo(1, Infinity), Infinity);
      assert.strictEqual(RA.roundTo(-1, Infinity), Infinity);
      assert.strictEqual(RA.roundTo(0, Infinity), Infinity);
      assert.strictEqual(RA.roundTo(1, -Infinity), -Infinity);
      assert.strictEqual(RA.roundTo(-1, -Infinity), -Infinity);
      assert.strictEqual(RA.roundTo(0, -Infinity), -Infinity);
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const round11 = RA.roundTo(R.__, 11);

    assert.strictEqual(round11(2), 12);
  });
});
