import * as RA from '../src';
import eq from './shared/eq';
import { padStartInvoker, padStartPolyfill } from '../src/padCharsStart';

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

  specify('should curry', function() {
    eq(RA.padCharsStart('-', 5, 'abc'), '--abc');
    eq(RA.padCharsStart('-', 5)('abc'), '--abc');
    eq(RA.padCharsStart('-')(5, 'abc'), '--abc');
    eq(RA.padCharsStart('-')(5)('abc'), '--abc');
  });

  context('padStartInvoker', function() {
    before(function() {
      if (RA.isNotFunction(String.prototype.padEnd)) {
        this.skip();
      }
    });

    specify('should pad string with given padString', function() {
      eq(padStartInvoker('-', 3, 'a'), '--a');
    });

    context('given targetLength as 0', function() {
      specify('should return original string', function() {
        eq(padStartInvoker('-', 0, 'abc'), 'abc');
      });
    });

    context('given targetLength less than string length', function() {
      specify('should return original string', function() {
        eq(padStartInvoker('-', 1, 'abc'), 'abc');
      });
    });

    context(
      'given targetLength less than equal to padString length',
      function() {
        specify('should trim padString', function() {
          eq(padStartInvoker('123456', 6, 'abc'), '123abc');
          eq(padStartInvoker('123456', 5, 'abc'), '12abc');
        });
      }
    );

    context('given targetLength supplied as float', function() {
      specify('should convert targetLength to integer', function() {
        eq(padStartInvoker('-', 7.5, 'abc'), '----abc');
      });
    });

    context(
      'given targetLength is a value coercible to valid integer number',
      function() {
        specify('should return padded string', function() {
          eq(padStartInvoker('-', '5', 'abc'), '--abc');
        });
      }
    );

    context('given targeLength is a negative number', function() {
      specify('should return original string', function() {
        eq(padStartInvoker('-', -10, 'abc'), 'abc');
      });
    });

    context('given padString set to undefined', function() {
      specify('should return string padded with spaces', function() {
        eq(padStartInvoker(undefined, 5, '200'), '  200');
      });
    });

    context('given null padString', function() {
      specify('should convert null to string type', function() {
        eq(padStartInvoker(null, 5, 'abc'), 'nuabc');
      });
    });

    specify('should curry', function() {
      eq(padStartInvoker('-', 5, 'abc'), '--abc');
      eq(padStartInvoker('-', 5)('abc'), '--abc');
      eq(padStartInvoker('-')(5, 'abc'), '--abc');
      eq(padStartInvoker('-')(5)('abc'), '--abc');
    });
  });

  context('padStartPolyfill', function() {
    specify('should pad string with given padString', function() {
      eq(padStartPolyfill('-', 3, 'a'), '--a');
    });

    context('given targetLength as 0', function() {
      specify('should return original string', function() {
        eq(padStartPolyfill('-', 0, 'abc'), 'abc');
      });
    });

    context('given targetLength less than string length', function() {
      specify('should return original string', function() {
        eq(padStartPolyfill('-', 1, 'abc'), 'abc');
      });
    });

    context(
      'given targetLength less than equal to padString length',
      function() {
        specify('should trim padString', function() {
          eq(padStartPolyfill('123456', 6, 'abc'), '123abc');
          eq(padStartPolyfill('123456', 5, 'abc'), '12abc');
        });
      }
    );

    context('given targetLength supplied as float', function() {
      specify('should convert targetLength to integer', function() {
        eq(padStartPolyfill('-', 7.5, 'abc'), '----abc');
      });
    });

    context(
      'given targetLength is a value coercible to valid integer number',
      function() {
        specify('should return padded string', function() {
          eq(padStartPolyfill('-', '5', 'abc'), '--abc');
        });
      }
    );

    context('given targeLength is a negative number', function() {
      specify('should return original string', function() {
        eq(padStartPolyfill('-', -10, 'abc'), 'abc');
      });
    });

    context('given padString set to undefined', function() {
      specify('should return string padded with spaces', function() {
        eq(padStartPolyfill(undefined, 5, '200'), '  200');
      });
    });

    context('given null padString', function() {
      specify('should convert null to string type', function() {
        eq(padStartPolyfill(null, 5, 'abc'), 'nuabc');
      });
    });

    specify('should curry', function() {
      eq(padStartPolyfill('-', 5, 'abc'), '--abc');
      eq(padStartPolyfill('-', 5)('abc'), '--abc');
      eq(padStartPolyfill('-')(5, 'abc'), '--abc');
      eq(padStartPolyfill('-')(5)('abc'), '--abc');
    });
  });
});
