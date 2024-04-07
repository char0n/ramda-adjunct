import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';
import { truncPonyfill } from '../src/trunc.js';

describe('trunc', function () {
  it('should truncate fractional digits', function () {
    assert.strictEqual(RA.trunc(13.37), 13);
    assert.strictEqual(RA.trunc(42.84), 42);
    assert.strictEqual(RA.trunc(0.123), 0);
    assert.strictEqual(RA.trunc(-0.123), -0);
  });

  context('given number in string', function () {
    specify('should truncate fractional digits', function () {
      assert.strictEqual(RA.trunc('-1.123'), -1);
    });
  });

  context('given integer number', function () {
    specify('should return original integer number', function () {
      assert.strictEqual(RA.trunc(0), 0);
      assert.strictEqual(RA.trunc(1), 1);
      assert.strictEqual(RA.trunc(-1), -1);
    });
  });

  context('given value that is not a number', function () {
    specify('should return NaN', function () {
      assert.isNaN(RA.trunc(undefined));
      assert.isNaN(RA.trunc(NaN));
      assert.isNaN(RA.trunc({}));
      assert.isNaN(RA.trunc(/a/));
      assert.isNaN(RA.trunc('test'));
      assert.isNaN(RA.trunc(new Error()));
    });
  });

  context('given null', function () {
    specify('should return 0', function () {
      assert.strictEqual(RA.trunc(null), 0);
    });
  });

  context('given Symbol value', function () {
    specify('should throw TypeError', function () {
      assert.throw(() => RA.trunc(Symbol('')));
    });
  });

  context('given valid date object', function () {
    specify(
      'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
      function () {
        assert.strictEqual(RA.trunc(new Date(2)), 2);
      }
    );
  });

  context('given Infinity value', function () {
    specify('should return untouched Infinity value', function () {
      assert.strictEqual(RA.trunc(Infinity), Infinity);
      assert.strictEqual(RA.trunc(-Infinity), -Infinity);
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const trunc = RA.trunc(R.__);

    assert.strictEqual(trunc(0.9), 0);
  });

  context('truncPonyfill', function () {
    before(function () {
      if (RA.isNotFunction(Math.trunc)) {
        this.skip();
      }
    });

    specify('should truncate fractional digits', function () {
      assert.strictEqual(truncPonyfill(13.37), 13);
      assert.strictEqual(truncPonyfill(42.84), 42);
      assert.strictEqual(truncPonyfill(0.123), 0);
      assert.strictEqual(truncPonyfill(-0.123), -0);
    });

    context('given number in string', function () {
      specify('should truncate fractional digits', function () {
        assert.strictEqual(truncPonyfill('-1.123'), -1);
      });
    });

    context('given integer number', function () {
      specify('should return original integer number', function () {
        assert.strictEqual(truncPonyfill(0), 0);
        assert.strictEqual(truncPonyfill(1), 1);
        assert.strictEqual(truncPonyfill(-1), -1);
      });
    });

    context('given value that is not a number', function () {
      specify('should return NaN', function () {
        assert.isNaN(truncPonyfill(undefined));
        assert.isNaN(truncPonyfill(NaN));
        assert.isNaN(truncPonyfill({}));
        assert.isNaN(truncPonyfill(/a/));
        assert.isNaN(truncPonyfill('test'));
        assert.isNaN(truncPonyfill(new Error()));
      });
    });

    context('given null', function () {
      specify('should return 0', function () {
        assert.strictEqual(truncPonyfill(null), 0);
      });
    });

    context('given Symbol value', function () {
      specify('should throw TypeError', function () {
        assert.throw(() => truncPonyfill(Symbol('')));
      });
    });

    context('given valid date object', function () {
      specify(
        'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
        function () {
          assert.strictEqual(truncPonyfill(new Date(2)), 2);
        }
      );
    });

    context('given Infinity value', function () {
      specify('should return untouched Infinity value', function () {
        assert.strictEqual(truncPonyfill(Infinity), Infinity);
        assert.strictEqual(truncPonyfill(-Infinity), -Infinity);
      });
    });

    specify('should support placeholder to specify "gaps"', function () {
      const trunc = truncPonyfill(R.__);

      assert.strictEqual(trunc(0.9), 0);
    });
  });
});
