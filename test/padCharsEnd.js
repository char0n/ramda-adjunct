import * as RA from '../src';
import { padEndInvoker, padEndPolyfill } from '../src/padCharsEnd';
import eq from './shared/eq';

describe('padCharsEnd', function() {
  specify('should pad string with given padString', function() {
    eq(RA.padCharsEnd('-', 3, 'a'), 'a--');
  });

  context('given targetLength as 0', function() {
    specify('should return original string', function() {
      eq(RA.padCharsEnd('$', 0, 'abc'), 'abc');
    });
  });

  context('given targetLength less than string length', function() {
    specify('should return original string', function() {
      eq(RA.padCharsEnd('$', 1, 'abc'), 'abc');
    });
  });

  context('given targetLength less than equal to padString length', function() {
    specify('should trim padString', function() {
      eq(RA.padCharsEnd('123456', 6, 'abc'), 'abc123');
      eq(RA.padCharsEnd('123456', 5, 'abc'), 'abc12');
    });
  });

  context('given targetLength supplied as float', function() {
    specify('should convert targetLength to integer', function() {
      eq(RA.padCharsEnd('$', 7.5, 'abc'), 'abc$$$$');
    });
  });

  context(
    'given targetLength is a value coercible to valid integer number',
    function() {
      specify('should return padded string', function() {
        eq(RA.padCharsEnd('*', '5', 'abc'), 'abc**');
      });
    }
  );

  context('given targeLength is a negative number', function() {
    specify('should return original string', function() {
      eq(RA.padCharsEnd('$', -10, 'abc'), 'abc');
    });
  });

  context('given padString set to undefined', function() {
    specify('should return string padded with spaces', function() {
      eq(RA.padCharsEnd(undefined, 5, '200'), '200  ');
    });
  });

  context('given null padString', function() {
    specify('should convert null to string type', function() {
      eq(RA.padCharsEnd(null, 5, 'abc'), 'abcnu');
    });
  });

  specify('should curry', function() {
    eq(RA.padCharsEnd('*', 5, 'abc'), 'abc**');
    eq(RA.padCharsEnd('*', 5)('abc'), 'abc**');
    eq(RA.padCharsEnd('*')(5, 'abc'), 'abc**');
    eq(RA.padCharsEnd('*')(5)('abc'), 'abc**');
  });

  context('padEndInvoker', function() {
    before(function() {
      if (RA.isNotFunction(String.prototype.padEnd)) {
        this.skip();
      }
    });

    specify('should pad string with given padString', function() {
      eq(padEndInvoker('-', 3, 'a'), 'a--');
    });

    context('given targetLength as 0', function() {
      specify('should return original string', function() {
        eq(padEndInvoker('$', 0, 'abc'), 'abc');
      });
    });

    context('given targetLength less than string length', function() {
      specify('should return original string', function() {
        eq(padEndInvoker('$', 1, 'abc'), 'abc');
      });
    });

    context(
      'given targetLength less than equal to padString length',
      function() {
        specify('should trim padString', function() {
          eq(padEndInvoker('123456', 6, 'abc'), 'abc123');
          eq(padEndInvoker('123456', 5, 'abc'), 'abc12');
        });
      }
    );

    context('given targetLength supplied as float', function() {
      specify('should convert targetLength to integer', function() {
        eq(padEndInvoker('$', 7.5, 'abc'), 'abc$$$$');
      });
    });

    context(
      'given targetLength is a value coercible to valid integer number',
      function() {
        specify('should return padded string', function() {
          eq(padEndInvoker('*', '5', 'abc'), 'abc**');
        });
      }
    );

    context('given targeLength is a negative number', function() {
      specify('should return original string', function() {
        eq(padEndInvoker('$', -10, 'abc'), 'abc');
      });
    });

    context('given padString set to undefined', function() {
      specify('should return string padded with spaces', function() {
        eq(padEndInvoker(undefined, 5, '200'), '200  ');
      });
    });

    context('given null padString', function() {
      specify('should convert null to string type', function() {
        eq(padEndInvoker(null, 5, 'abc'), 'abcnu');
      });
    });

    specify('should curry', function() {
      eq(padEndInvoker('*', 5, 'abc'), 'abc**');
      eq(padEndInvoker('*', 5)('abc'), 'abc**');
      eq(padEndInvoker('*')(5, 'abc'), 'abc**');
      eq(padEndInvoker('*')(5)('abc'), 'abc**');
    });
  });

  context('padEndPolyfill', function() {
    specify('should pad string with given padString', function() {
      eq(padEndPolyfill('-', 3, 'a'), 'a--');
    });

    context('given targetLength as 0', function() {
      specify('should return original string', function() {
        eq(padEndPolyfill('$', 0, 'abc'), 'abc');
      });
    });

    context('given targetLength less than string length', function() {
      specify('should return original string', function() {
        eq(padEndPolyfill('$', 1, 'abc'), 'abc');
      });
    });

    context(
      'given targetLength less than equal to padString length',
      function() {
        specify('should trim padString', function() {
          eq(padEndPolyfill('123456', 6, 'abc'), 'abc123');
          eq(padEndPolyfill('123456', 5, 'abc'), 'abc12');
        });
      }
    );

    context('given targetLength supplied as float', function() {
      specify('should convert targetLength to integer', function() {
        eq(padEndPolyfill('$', 7.5, 'abc'), 'abc$$$$');
      });
    });

    context(
      'given targetLength is a value coercible to valid integer number',
      function() {
        specify('should return padded string', function() {
          eq(padEndPolyfill('*', '5', 'abc'), 'abc**');
        });
      }
    );

    context('given targeLength is a negative number', function() {
      specify('should return original string', function() {
        eq(padEndPolyfill('$', -10, 'abc'), 'abc');
      });
    });

    context('given padString set to undefined', function() {
      specify('should return string padded with spaces', function() {
        eq(padEndPolyfill(undefined, 5, '200'), '200  ');
      });
    });

    context('given null padString', function() {
      specify('should convert null to string type', function() {
        eq(padEndPolyfill(null, 5, 'abc'), 'abcnu');
      });
    });

    specify('should curry', function() {
      eq(padEndPolyfill('*', 5, 'abc'), 'abc**');
      eq(padEndPolyfill('*', 5)('abc'), 'abc**');
      eq(padEndPolyfill('*')(5, 'abc'), 'abc**');
      eq(padEndPolyfill('*')(5)('abc'), 'abc**');
    });
  });
});
