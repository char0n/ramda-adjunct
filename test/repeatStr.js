import { assert } from 'chai';

import * as RA from '../src';
import { repeatStrInvoker, repeatStrPolyfill } from '../src/repeatStr';
import eq from './shared/eq';

describe('repeatStr', function() {
  specify('should repeat string n times', function() {
    eq(RA.repeatStr('abc', 3), 'abcabcabc');
  });

  context('given count 0', function() {
    specify('should return empty string', function() {
      eq(RA.repeatStr('abc', 0), '');
    });
  });

  context('given count 1', function() {
    specify('should return original string', function() {
      eq(RA.repeatStr('abc', 1), 'abc');
    });
  });

  context('given count supplied as float', function() {
    specify('should convert count to integer', function() {
      eq(RA.repeatStr('abc', 3.5), 'abcabcabc');
    });
  });

  context('given count is negative number', function() {
    specify('should throw RangeError', function() {
      assert.throws(() => RA.repeatStr('abc', -1), RangeError);
    });
  });

  context('given count is Infinity', function() {
    specify('should throw RangeError', function() {
      assert.throws(() => RA.repeatStr('abc', 1 / 0), RangeError);
    });
  });

  context('given count is not a number', function() {
    specify('should return empty string', function() {
      eq(RA.repeatStr('abc', 'a'), '');
      eq(RA.repeatStr('abc', null), '');
      eq(RA.repeatStr('abc', undefined), '');
      eq(RA.repeatStr('abc', NaN), '');
    });
  });

  specify('should be curried', function() {
    eq(RA.repeatStr('abc', 3.5), 'abcabcabc');
    eq(RA.repeatStr('abc')(3.5), 'abcabcabc');
  });

  context('repeatStrInvoker', function() {
    before(function() {
      if (RA.isNotFunction(String.prototype.repeat)) {
        this.skip();
      }
    });

    specify('should repeat string n times', function() {
      eq(repeatStrInvoker('abc', 3), 'abcabcabc');
    });

    context('given count 0', function() {
      specify('should return empty string', function() {
        eq(repeatStrInvoker('abc', 0), '');
      });
    });

    context('given count 1', function() {
      specify('should return original string', function() {
        eq(repeatStrInvoker('abc', 1), 'abc');
      });
    });

    context('given count supplied as float', function() {
      specify('should convert count to integer', function() {
        eq(repeatStrInvoker('abc', 3.5), 'abcabcabc');
      });
    });

    context('given count is negative number', function() {
      specify('should throw RangeError', function() {
        assert.throws(() => repeatStrInvoker('abc', -1), RangeError);
      });
    });

    context('given count is Infinity', function() {
      specify('should throw RangeError', function() {
        assert.throws(() => repeatStrInvoker('abc', 1 / 0), RangeError);
      });
    });

    context('given count is not a number', function() {
      specify('should return empty string', function() {
        eq(repeatStrInvoker('abc', 'a'), '');
        eq(repeatStrInvoker('abc', null), '');
        eq(repeatStrInvoker('abc', undefined), '');
        eq(repeatStrInvoker('abc', NaN), '');
      });
    });

    specify('should be curried', function() {
      eq(repeatStrInvoker('abc', 3.5), 'abcabcabc');
      eq(repeatStrInvoker('abc')(3.5), 'abcabcabc');
    });
  });

  context('repeatStrPolyfill', function() {
    specify('should repeat string n times', function() {
      eq(repeatStrPolyfill('abc', 3), 'abcabcabc');
    });

    context('given count 0', function() {
      specify('should return empty string', function() {
        eq(repeatStrPolyfill('abc', 0), '');
      });
    });

    context('given count 1', function() {
      specify('should return original string', function() {
        eq(repeatStrPolyfill('abc', 1), 'abc');
      });
    });

    context('given count supplied as float', function() {
      specify('should convert count to integer', function() {
        eq(repeatStrPolyfill('abc', 3.5), 'abcabcabc');
      });
    });

    context('given count is negative number', function() {
      specify('should throw RangeError', function() {
        assert.throws(() => repeatStrPolyfill('abc', -1), RangeError);
      });
    });

    context('given count is Infinity', function() {
      specify('should throw RangeError', function() {
        assert.throws(() => repeatStrPolyfill('abc', 1 / 0), RangeError);
      });
    });

    context('given count is not a number', function() {
      specify('should return empty string', function() {
        eq(repeatStrPolyfill('abc', 'a'), '');
        eq(repeatStrPolyfill('abc', null), '');
        eq(repeatStrPolyfill('abc', undefined), '');
        eq(repeatStrPolyfill('abc', NaN), '');
      });
    });

    specify('should be curried', function() {
      eq(repeatStrPolyfill('abc', 3.5), 'abcabcabc');
      eq(repeatStrPolyfill('abc')(3.5), 'abcabcabc');
    });
  });
});
