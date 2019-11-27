import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import Symbol from './shared/Symbol';
import { truncPolyfill } from '../src/trunc';

describe('trunc', function() {
  it('should truncate fractional digits', function() {
    assert.strictEqual(RA.trunc(13.37), 13);
    assert.strictEqual(RA.trunc(42.84), 42);
    assert.strictEqual(RA.trunc(0.123), 0);
    assert.strictEqual(RA.trunc(-0.123), -0);
  });

  context('given number in string', function() {
    specify('should truncate fractional digits', function() {
      assert.strictEqual(RA.trunc('-1.123'), -1);
    });
  });

  context('given integer number', function() {
    specify('should return original integer number', function() {
      assert.strictEqual(RA.trunc(0), 0);
      assert.strictEqual(RA.trunc(1), 1);
      assert.strictEqual(RA.trunc(-1), -1);
    });
  });

  context('given value that is not a number', function() {
    specify('should return NaN', function() {
      assert.isNaN(RA.trunc(undefined));
      assert.isNaN(RA.trunc(NaN));
      assert.isNaN(RA.trunc({}));
      assert.isNaN(RA.trunc(/a/));
      assert.isNaN(RA.trunc('test'));
      assert.isNaN(RA.trunc(new Error()));
    });
  });

  context('given null', function() {
    specify('should return 0', function() {
      assert.strictEqual(RA.trunc(null), 0);
    });
  });

  context('given Symbol value', function() {
    specify('should throw TypeError', function() {
      let shouldThrow;
      try {
        Math.trunc(Symbol(''));
        shouldThrow = false;
      } catch (e) {
        shouldThrow = true;
      }

      if (shouldThrow) {
        assert.throw(() => RA.trunc(Symbol('')));
      }
    });
  });

  context('given valid date object', function() {
    specify(
      'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
      function() {
        assert.strictEqual(RA.trunc(new Date(2)), 2);
      }
    );
  });

  context('given Infinity value', function() {
    specify('should return untouched Infinity value', function() {
      assert.strictEqual(RA.trunc(Infinity), Infinity);
      assert.strictEqual(RA.trunc(-Infinity), -Infinity);
    });
  });

  it('should support placeholder to specify "gaps"', function() {
    const trunc = RA.trunc(R.__);

    assert.strictEqual(trunc(0.9), 0);
  });

  context('truncPolyfill', function() {
    before(function() {
      if (RA.isNotFunction(Math.trunc)) {
        this.skip();
      }
    });

    specify('should truncate fractional digits', function() {
      assert.strictEqual(truncPolyfill(13.37), 13);
      assert.strictEqual(truncPolyfill(42.84), 42);
      assert.strictEqual(truncPolyfill(0.123), 0);
      assert.strictEqual(truncPolyfill(-0.123), -0);
    });

    context('given number in string', function() {
      specify('should truncate fractional digits', function() {
        assert.strictEqual(truncPolyfill('-1.123'), -1);
      });
    });

    context('given integer number', function() {
      specify('should return original integer number', function() {
        assert.strictEqual(truncPolyfill(0), 0);
        assert.strictEqual(truncPolyfill(1), 1);
        assert.strictEqual(truncPolyfill(-1), -1);
      });
    });

    context('given value that is not a number', function() {
      specify('should return NaN', function() {
        assert.isNaN(truncPolyfill(undefined));
        assert.isNaN(truncPolyfill(NaN));
        assert.isNaN(truncPolyfill({}));
        assert.isNaN(truncPolyfill(/a/));
        assert.isNaN(truncPolyfill('test'));
        assert.isNaN(truncPolyfill(new Error()));
      });
    });

    context('given null', function() {
      specify('should return 0', function() {
        assert.strictEqual(truncPolyfill(null), 0);
      });
    });

    context('given Symbol value', function() {
      specify('should throw TypeError', function() {
        let shouldThrow;
        try {
          Math.trunc(Symbol(''));
          shouldThrow = false;
        } catch (e) {
          shouldThrow = true;
        }

        if (shouldThrow) {
          assert.throw(() => truncPolyfill(Symbol('')));
        }
      });
    });

    context('given valid date object', function() {
      specify(
        'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
        function() {
          assert.strictEqual(truncPolyfill(new Date(2)), 2);
        }
      );
    });

    context('given Infinity value', function() {
      specify('should return untouched Infinity value', function() {
        assert.strictEqual(truncPolyfill(Infinity), Infinity);
        assert.strictEqual(truncPolyfill(-Infinity), -Infinity);
      });
    });

    specify('should support placeholder to specify "gaps"', function() {
      const trunc = truncPolyfill(R.__);

      assert.strictEqual(trunc(0.9), 0);
    });
  });
});
