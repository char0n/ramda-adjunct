import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';

describe('floor', function () {
  it('should floor float to nearest integer', function () {
    assert.strictEqual(RA.floor(0.9), 0);
    assert.strictEqual(RA.floor(5.95), 5);
    assert.strictEqual(RA.floor(5.5), 5);
    assert.strictEqual(RA.floor(5.05), 5);
    assert.strictEqual(RA.floor(-5.05), -6);
    assert.strictEqual(RA.floor(-5.5), -6);
    assert.strictEqual(RA.floor(-5.95), -6);
  });

  context('given integer number', function () {
    specify('should return original integer number', function () {
      assert.strictEqual(RA.floor(0), 0);
      assert.strictEqual(RA.floor(1), 1);
      assert.strictEqual(RA.floor(-1), -1);
    });
  });

  context('given value that is not a number', function () {
    specify('should return NaN', function () {
      assert.isNaN(RA.floor(undefined));
      assert.isNaN(RA.floor(NaN));
      assert.isNaN(RA.floor({}));
      assert.isNaN(RA.floor(/a/));
      assert.isNaN(RA.floor('test'));
      assert.isNaN(RA.floor(new Error()));
    });
  });

  context('given null', function () {
    specify('should return 0', function () {
      assert.strictEqual(RA.floor(null), 0);
    });
  });

  context('given Symbol value', function () {
    specify('should throw TypeError', function () {
      assert.throw(() => RA.floor(Symbol('')));
    });
  });

  context('given valid date object', function () {
    specify(
      'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
      function () {
        assert.strictEqual(RA.floor(new Date(2)), 2);
      }
    );
  });

  context('given Infinity value', function () {
    specify('should return untouched Infinity value', function () {
      assert.strictEqual(RA.floor(Infinity), Infinity);
      assert.strictEqual(RA.floor(-Infinity), -Infinity);
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const floor = RA.floor(R.__);

    assert.strictEqual(floor(0.9), 0);
  });
});
