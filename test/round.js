import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';

describe('round', function () {
  it('should round float to nearest integer', function () {
    assert.strictEqual(RA.round(0.9), 1);
    assert.strictEqual(RA.round(5.95), 6);
    assert.strictEqual(RA.round(5.5), 6);
    assert.strictEqual(RA.round(5.05), 5);
    assert.strictEqual(RA.round(-5.05), -5);
    assert.strictEqual(RA.round(-5.5), -5);
    assert.strictEqual(RA.round(-5.95), -6);
  });

  context('given integer number', function () {
    specify('should return original integer number', function () {
      assert.strictEqual(RA.round(0), 0);
      assert.strictEqual(RA.round(1), 1);
      assert.strictEqual(RA.round(-1), -1);
    });
  });

  context('given value that is not a number', function () {
    specify('should return NaN', function () {
      assert.isNaN(RA.round(undefined));
      assert.isNaN(RA.round(NaN));
      assert.isNaN(RA.round({}));
      assert.isNaN(RA.round(/a/));
      assert.isNaN(RA.round('test'));
      assert.isNaN(RA.round(new Error()));
    });
  });

  context('given null', function () {
    specify('should return 0', function () {
      assert.strictEqual(RA.round(null), 0);
    });
  });

  context('given Symbol value', function () {
    specify('should throw TypeError', function () {
      assert.throw(() => RA.round(Symbol('')));
    });
  });

  context('given valid date object', function () {
    specify(
      'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
      function () {
        assert.strictEqual(RA.round(new Date(2)), 2);
      }
    );
  });

  context('given Infinity value', function () {
    specify('should return untouched Infinity value', function () {
      assert.strictEqual(RA.round(Infinity), Infinity);
      assert.strictEqual(RA.round(-Infinity), -Infinity);
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const round = RA.round(R.__);

    assert.strictEqual(round(0.9), 1);
  });
});
