import * as RA from '../src';
import eq from './shared/eq';
import {
  stringPadStartInvoker,
  stringPadStartPolyfill,
} from '../src/padCharsStart';

describe('padCharsStart', function() {
  specify('should pad string with given padString', function() {
    eq(RA.padCharsStart('-', 3, 'a'), '--a');
  });

  context('given targetLength as 0', function() {
    specify('should return original string', function() {
      eq(RA.padCharsStart('-', 0, 'abc'), 'abc');
    });
  });

  context('given targetLength less than string length', function() {
    specify('should return original string', function() {
      eq(RA.padCharsStart('-', 1, 'abc'), 'abc');
    });
  });

  context('given targetLength less than equal to padString length', function() {
    specify('should trim padString', function() {
      eq(RA.padCharsStart('123456', 6, 'abc'), '123abc');
      eq(RA.padCharsStart('123456', 5, 'abc'), '12abc');
    });
  });

  context('given targetLength supplied as float', function() {
    specify('should convert targetLength to integer', function() {
      eq(RA.padCharsStart('-', 7.5, 'abc'), '----abc');
    });
  });

  context(
    'given targetLength is a value coercible to valid integer number',
    function() {
      specify('should return padded string', function() {
        eq(RA.padCharsStart('-', '5', 'abc'), '--abc');
      });
    }
  );

  context('given targeLength is a negative number', function() {
    specify('should return original string', function() {
      eq(RA.padCharsStart('-', -10, 'abc'), 'abc');
    });
  });

  context('given padString set to undefined', function() {
    specify('should return string padded with spaces', function() {
      eq(RA.padCharsStart(undefined, 5, '200'), '  200');
    });
  });

  context('given null padString', function() {
    specify('should convert null to string type', function() {
      eq(RA.padCharsStart(null, 5, 'abc'), 'nuabc');
    });
  });

  specify('should be curried', function() {
    eq(RA.padCharsStart('-', 5, 'abc'), '--abc');
    eq(RA.padCharsStart('-', 5)('abc'), '--abc');
    eq(RA.padCharsStart('-')(5, 'abc'), '--abc');
    eq(RA.padCharsStart('-')(5)('abc'), '--abc');
  });

  //   Tests cases for invoker of native String.prototype.padStart
  context('stringPadStartInvoker', function() {
    beforeEach(function() {
      if (RA.isNotFunction(String.prototype.padEnd)) {
        this.skip();
      }
    });

    specify('should pad string with given padString', function() {
      eq(stringPadStartInvoker('-', 3, 'a'), '--a');
    });

    context('given targetLength as 0', function() {
      specify('should return original string', function() {
        eq(stringPadStartInvoker('-', 0, 'abc'), 'abc');
      });
    });

    context('given targetLength less than string length', function() {
      specify('should return original string', function() {
        eq(stringPadStartInvoker('-', 1, 'abc'), 'abc');
      });
    });

    context(
      'given targetLength less than equal to padString length',
      function() {
        specify('should trim padString', function() {
          eq(stringPadStartInvoker('123456', 6, 'abc'), '123abc');
          eq(stringPadStartInvoker('123456', 5, 'abc'), '12abc');
        });
      }
    );

    context('given targetLength supplied as float', function() {
      specify('should convert targetLength to integer', function() {
        eq(stringPadStartInvoker('-', 7.5, 'abc'), '----abc');
      });
    });

    context(
      'given targetLength is a value coercible to valid integer number',
      function() {
        specify('should return padded string', function() {
          eq(stringPadStartInvoker('-', '5', 'abc'), '--abc');
        });
      }
    );

    context('given targeLength is a negative number', function() {
      specify('should return original string', function() {
        eq(stringPadStartInvoker('-', -10, 'abc'), 'abc');
      });
    });

    context('given padString set to undefined', function() {
      specify('should return string padded with spaces', function() {
        eq(stringPadStartInvoker(undefined, 5, '200'), '  200');
      });
    });

    context('given null padString', function() {
      specify('should convert null to string type', function() {
        eq(stringPadStartInvoker(null, 5, 'abc'), 'nuabc');
      });
    });

    specify('should be curried', function() {
      eq(stringPadStartInvoker('-', 5, 'abc'), '--abc');
      eq(stringPadStartInvoker('-', 5)('abc'), '--abc');
      eq(stringPadStartInvoker('-')(5, 'abc'), '--abc');
      eq(stringPadStartInvoker('-')(5)('abc'), '--abc');
    });
  });

  //   Tests cases for String.prototype.padStart polyfil
  context('stringPadStartPolyfill', function() {
    specify('should pad string with given padString', function() {
      eq(stringPadStartPolyfill('-', 3, 'a'), '--a');
    });

    context('given targetLength as 0', function() {
      specify('should return original string', function() {
        eq(stringPadStartPolyfill('-', 0, 'abc'), 'abc');
      });
    });

    context('given targetLength less than string length', function() {
      specify('should return original string', function() {
        eq(stringPadStartPolyfill('-', 1, 'abc'), 'abc');
      });
    });

    context(
      'given targetLength less than equal to padString length',
      function() {
        specify('should trim padString', function() {
          eq(stringPadStartPolyfill('123456', 6, 'abc'), '123abc');
          eq(stringPadStartPolyfill('123456', 5, 'abc'), '12abc');
        });
      }
    );

    context('given targetLength supplied as float', function() {
      specify('should convert targetLength to integer', function() {
        eq(stringPadStartPolyfill('-', 7.5, 'abc'), '----abc');
      });
    });

    context(
      'given targetLength is a value coercible to valid integer number',
      function() {
        specify('should return padded string', function() {
          eq(stringPadStartPolyfill('-', '5', 'abc'), '--abc');
        });
      }
    );

    context('given targeLength is a negative number', function() {
      specify('should return original string', function() {
        eq(stringPadStartPolyfill('-', -10, 'abc'), 'abc');
      });
    });

    context('given padString set to undefined', function() {
      specify('should return string padded with spaces', function() {
        eq(stringPadStartPolyfill(undefined, 5, '200'), '  200');
      });
    });

    context('given null padString', function() {
      specify('should convert null to string type', function() {
        eq(stringPadStartPolyfill(null, 5, 'abc'), 'nuabc');
      });
    });

    specify('should be curried', function() {
      eq(stringPadStartPolyfill('-', 5, 'abc'), '--abc');
      eq(stringPadStartPolyfill('-', 5)('abc'), '--abc');
      eq(stringPadStartPolyfill('-')(5, 'abc'), '--abc');
      eq(stringPadStartPolyfill('-')(5)('abc'), '--abc');
    });
  });
});
