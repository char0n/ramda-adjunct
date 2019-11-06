import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import eq from './shared/eq';
import Symbol from './shared/Symbol';
import { signPolyfill } from '../src/sign';

describe('sign', function() {
  it('should return proper sign result', function() {
    eq(RA.sign(3), 1);
    eq(RA.sign(3.3), 1);
    eq(RA.sign(-3), -1);
    eq(RA.sign(-3.3), -1);
    eq(RA.sign(0), 0);
    eq(RA.sign(-0), -0);
  });

  context('given number in string', function() {
    specify('should return proper sign', function() {
      eq(RA.sign('-1.123'), -1);
      eq(RA.sign('1.123'), 1);
    });
  });

  context('given integer number', function() {
    specify('should return original integer number', function() {
      eq(RA.sign(0), 0);
      eq(RA.sign(1), 1);
      eq(RA.sign(-1), -1);
    });
  });

  context('given value that is not a number', function() {
    specify('should return NaN', function() {
      eq(RA.sign(undefined), NaN);
      eq(RA.sign(NaN), NaN);
      eq(RA.sign({}), NaN);
      eq(RA.sign(/a/), NaN);
      eq(RA.sign('test'), NaN);
      eq(RA.sign(new Error()), NaN);
    });
  });

  context('given null', function() {
    specify('should return 0', function() {
      eq(RA.sign(null), 0);
    });
  });

  context('given Symbol value', function() {
    specify('should throw TypeError', function() {
      let shouldThrow;
      try {
        Math.sign(Symbol(''));
        shouldThrow = false;
      } catch (e) {
        shouldThrow = true;
      }

      if (shouldThrow) {
        assert.throw(() => RA.sign(Symbol('')));
      }
    });
  });

  context('given valid date object', function() {
    specify(
      'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
      function() {
        eq(RA.sign(new Date(2)), 1);
      }
    );
  });

  context('given Infinity value', function() {
    specify('should return proper sign', function() {
      eq(RA.sign(Infinity), 1);
      eq(RA.sign(-Infinity), -1);
    });
  });

  it('should support placeholder to specify "gaps"', function() {
    const sign = RA.sign(R.__);

    eq(sign(0.9), 1);
  });

  context('signPolyfill', function() {
    before(function() {
      if (RA.isNotFunction(Math.sign)) {
        this.skip();
      }
    });

    specify('should return proper sign result', function() {
      eq(signPolyfill(3), 1);
      eq(signPolyfill(3.3), 1);
      eq(signPolyfill(-3), -1);
      eq(signPolyfill(-3.3), -1);
      eq(signPolyfill(0), 0);
      eq(signPolyfill(-0), -0);
    });

    context('given number in string', function() {
      specify('should return proper sign', function() {
        eq(signPolyfill('-1.123'), -1);
        eq(signPolyfill('1.123'), 1);
      });
    });

    context('given integer number', function() {
      specify('should return original integer number', function() {
        eq(signPolyfill(0), 0);
        eq(signPolyfill(1), 1);
        eq(signPolyfill(-1), -1);
      });
    });

    context('given value that is not a number', function() {
      specify('should return NaN', function() {
        eq(signPolyfill(undefined), NaN);
        eq(signPolyfill(NaN), NaN);
        eq(signPolyfill({}), NaN);
        eq(signPolyfill(/a/), NaN);
        eq(signPolyfill('test'), NaN);
        eq(signPolyfill(new Error()), NaN);
      });
    });

    context('given null', function() {
      specify('should return 0', function() {
        eq(signPolyfill(null), 0);
      });
    });

    context('given Symbol value', function() {
      specify('should throw TypeError', function() {
        let shouldThrow;
        try {
          Math.sign(Symbol(''));
          shouldThrow = false;
        } catch (e) {
          shouldThrow = true;
        }

        if (shouldThrow) {
          assert.throw(() => signPolyfill(Symbol('')));
        }
      });
    });

    context('given valid date object', function() {
      specify(
        'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
        function() {
          eq(signPolyfill(new Date(2)), 1);
        }
      );
    });

    context('given Infinity value', function() {
      specify('should return proper sign', function() {
        eq(signPolyfill(Infinity), 1);
        eq(signPolyfill(-Infinity), -1);
      });
    });

    specify('should support placeholder to specify "gaps"', function() {
      const sign = RA.sign(R.__);

      eq(sign(0.9), 1);
    });
  });
});
