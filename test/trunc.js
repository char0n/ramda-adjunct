import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import eq from './shared/eq';
import Symbol from './shared/Symbol';
import { truncPolyfill } from '../src/trunc';

describe('trunc', function() {
  it('should truncate fractional digits', function() {
    eq(RA.trunc(13.37), 13);
    eq(RA.trunc(42.84), 42);
    eq(RA.trunc(0.123), 0);
    eq(RA.trunc(-0.123), -0);
  });

  context('given number in string', function() {
    specify('should truncate fractional digits', function() {
      eq(RA.trunc('-1.123'), -1);
    });
  });

  context('given integer number', function() {
    specify('should return original integer number', function() {
      eq(RA.trunc(0), 0);
      eq(RA.trunc(1), 1);
      eq(RA.trunc(-1), -1);
    });
  });

  context('given value that is not a number', function() {
    specify('should return NaN', function() {
      eq(RA.trunc(undefined), NaN);
      eq(RA.trunc(NaN), NaN);
      eq(RA.trunc({}), NaN);
      eq(RA.trunc(/a/), NaN);
      eq(RA.trunc('test'), NaN);
      eq(RA.trunc(new Error()), NaN);
    });
  });

  context('given null', function() {
    specify('should return 0', function() {
      eq(RA.trunc(null), 0);
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
        eq(RA.trunc(new Date(2)), 2);
      }
    );
  });

  context('given Infinity value', function() {
    specify('should return untouched Infinity value', function() {
      eq(RA.trunc(Infinity), Infinity);
      eq(RA.trunc(-Infinity), -Infinity);
    });
  });

  it('should support placeholder to specify "gaps"', function() {
    const trunc = RA.trunc(R.__);

    eq(trunc(0.9), 0);
  });

  context('truncPolyfill', function() {
    before(function() {
      if (RA.isNotFunction(Math.trunc)) {
        this.skip();
      }
    });

    specify('should truncate fractional digits', function() {
      eq(truncPolyfill(13.37), 13);
      eq(truncPolyfill(42.84), 42);
      eq(truncPolyfill(0.123), 0);
      eq(truncPolyfill(-0.123), -0);
    });

    context('given number in string', function() {
      specify('should truncate fractional digits', function() {
        eq(truncPolyfill('-1.123'), -1);
      });
    });

    context('given integer number', function() {
      specify('should return original integer number', function() {
        eq(truncPolyfill(0), 0);
        eq(truncPolyfill(1), 1);
        eq(truncPolyfill(-1), -1);
      });
    });

    context('given value that is not a number', function() {
      specify('should return NaN', function() {
        eq(truncPolyfill(undefined), NaN);
        eq(truncPolyfill(NaN), NaN);
        eq(truncPolyfill({}), NaN);
        eq(truncPolyfill(/a/), NaN);
        eq(truncPolyfill('test'), NaN);
        eq(truncPolyfill(new Error()), NaN);
      });
    });

    context('given null', function() {
      specify('should return 0', function() {
        eq(truncPolyfill(null), 0);
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
          eq(truncPolyfill(new Date(2)), 2);
        }
      );
    });

    context('given Infinity value', function() {
      specify('should return untouched Infinity value', function() {
        eq(truncPolyfill(Infinity), Infinity);
        eq(truncPolyfill(-Infinity), -Infinity);
      });
    });

    specify('should support placeholder to specify "gaps"', function() {
      const trunc = truncPolyfill(R.__);

      eq(trunc(0.9), 0);
    });
  });
});
