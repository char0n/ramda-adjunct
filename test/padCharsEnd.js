import * as RA from '../src';
import {
  padCharsEndStrInvoker,
  padCharsEndStrPolyfill,
} from '../src/padCharsEnd';
import eq from './shared/eq';

describe('padCharsEnd', function() {
  specify('should pad string with given padString', function() {
    eq(RA.padCharsEnd('-', 3, 'a'), 'a--');
  });

  specify('should be curried', function() {
    eq(RA.padCharsEnd('*', 5, 'abc'), 'abc**');
    eq(RA.padCharsEnd('*', 5)('abc'), 'abc**');
    eq(RA.padCharsEnd('*')(5, 'abc'), 'abc**');
    eq(RA.padCharsEnd('*')(5)('abc'), 'abc**');
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
      eq(RA.padCharsEnd('$', 7, 'abc'), 'abc$$$$');
    });
  });

  context('given targetLength is not a number', function() {
    specify('should return padded string', function() {
      eq(RA.padCharsEnd('*', '5', 'abc'), 'abc**');
    });
  });

  context('given empty padString', function() {
    specify('should return string padded with spaces', function() {
      eq(RA.padCharsEnd(undefined, 5, '200'), '200  ');
    });
  });

  context('given null padString', function() {
    specify('should convert null to string type', function() {
      eq(RA.padCharsEnd(null, 5, 'abc'), 'abcnu');
    });
  });

  context('padCharsEndStrInvoker', function() {
    beforeEach(function() {
      if (RA.isNotFunction(String.prototype.padEnd)) {
        this.skip();
      }
    });

    specify('should pad string with given padString', function() {
      eq(padCharsEndStrInvoker('-', 3, 'a'), 'a--');
    });

    specify('should be curried', function() {
      eq(padCharsEndStrInvoker('*', 5, 'abc'), 'abc**');
      eq(padCharsEndStrInvoker('*', 5)('abc'), 'abc**');
      eq(padCharsEndStrInvoker('*')(5, 'abc'), 'abc**');
      eq(padCharsEndStrInvoker('*')(5)('abc'), 'abc**');
    });

    context('given targetLength as 0', function() {
      specify('should return original string', function() {
        eq(padCharsEndStrInvoker('$', 0, 'abc'), 'abc');
      });
    });

    context('given targetLength less than string length', function() {
      specify('should return original string', function() {
        eq(padCharsEndStrInvoker('$', 1, 'abc'), 'abc');
      });
    });

    context(
      'given targetLength less than equal to padString length',
      function() {
        specify('should trim padString', function() {
          eq(padCharsEndStrInvoker('123456', 6, 'abc'), 'abc123');
          eq(padCharsEndStrInvoker('123456', 5, 'abc'), 'abc12');
        });
      }
    );

    context('given targetLength supplied as float', function() {
      specify('should convert targetLength to integer', function() {
        eq(padCharsEndStrInvoker('$', 7, 'abc'), 'abc$$$$');
      });
    });

    context('given targetLength is not a number', function() {
      specify('should return padded string', function() {
        eq(padCharsEndStrInvoker('*', '5', 'abc'), 'abc**');
      });
    });

    context('given empty padString', function() {
      specify('should return string padded with spaces', function() {
        eq(padCharsEndStrInvoker(undefined, 5, '200'), '200  ');
      });
    });

    context('given null padString', function() {
      specify('should convert null to string type', function() {
        eq(padCharsEndStrInvoker(null, 5, 'abc'), 'abcnu');
      });
    });
  });

  context('padCharsEndStrPolyfill', function() {
    specify('should pad string with given padString', function() {
      eq(padCharsEndStrPolyfill('-', 3, 'a'), 'a--');
    });

    specify('should be curried', function() {
      eq(padCharsEndStrPolyfill('*', 5, 'abc'), 'abc**');
      eq(padCharsEndStrPolyfill('*')(5)('abc'), 'abc**');
      eq(padCharsEndStrPolyfill('*', 5)('abc'), 'abc**');
    });

    context('given targetLength as 0', function() {
      specify('should return original string', function() {
        eq(padCharsEndStrPolyfill('$', 0, 'abc'), 'abc');
      });
    });

    context('given targetLength less than string length', function() {
      specify('should return original string', function() {
        eq(padCharsEndStrPolyfill('$', 1, 'abc'), 'abc');
      });
    });

    context(
      'given targetLength less than equal to padString length',
      function() {
        specify('should trim padString', function() {
          eq(padCharsEndStrPolyfill('123456', 6, 'abc'), 'abc123');
          eq(padCharsEndStrPolyfill('123456', 5, 'abc'), 'abc12');
        });
      }
    );

    context('given targetLength supplied as float', function() {
      specify('should convert targetLength to integer', function() {
        eq(padCharsEndStrPolyfill('$', 7, 'abc'), 'abc$$$$');
      });
    });

    context('given targetLength is not a number', function() {
      specify('should return padded string', function() {
        eq(padCharsEndStrPolyfill('*', '5', 'abc'), 'abc**');
      });
    });

    context('given empty padString', function() {
      specify('should return string padded with spaces', function() {
        eq(padCharsEndStrPolyfill(undefined, 5, '200'), '200  ');
      });
    });

    context('given null padString', function() {
      specify('should convert null to string type', function() {
        eq(padCharsEndStrPolyfill(null, 5, 'abc'), 'abcnu');
      });
    });
  });
});
