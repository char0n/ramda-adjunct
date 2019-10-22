import * as R from 'ramda';

import * as RA from '../src';
import { trimEndInvoker, trimEndPolyfill } from '../src/trimEnd';
import eq from './shared/eq';

describe('trimEnd', function() {
  specify('should remove whitespace from the end of a string', function() {
    eq(RA.trimEnd('abc   '), 'abc');
  });

  specify(
    'should not remove whitespace from the rest of the string',
    function() {
      eq(RA.trimEnd(' a b c'), ' a b c');
    }
  );

  context('given an empty string', function() {
    specify('should return an empty string', function() {
      eq(RA.trimEnd(''), '');
    });
  });

  context('given an string with whitespaces only', function() {
    specify('should return an empty string', function() {
      eq(RA.trimEnd('   '), '');
    });
  });

  specify('should support placeholder to specify "gaps"', function() {
    const trimEnd = RA.trimEnd(R.__);

    eq(trimEnd('abc   '), 'abc');
  });

  context('trimEndInvoker', function() {
    beforeEach(function() {
      if (RA.isNotFunction(String.prototype.trimEnd)) {
        this.skip();
      }
    });

    specify('should remove whitespace from the end of a string', function() {
      eq(trimEndInvoker('abc   '), 'abc');
    });

    specify(
      'should not remove whitespace from the rest of the string',
      function() {
        eq(trimEndInvoker(' a b c'), ' a b c');
      }
    );

    context('given an empty string', function() {
      specify('should return an empty string', function() {
        eq(trimEndInvoker(''), '');
      });
    });

    context('given an string with whitespaces only', function() {
      specify('should return an empty string', function() {
        eq(trimEndInvoker('   '), '');
      });
    });

    specify('should support placeholder to specify "gaps"', function() {
      const trimEnd = trimEndInvoker(R.__);

      eq(trimEnd('abc   '), 'abc');
    });
  });

  context('trimEndPolyfill', function() {
    specify('should remove whitespace from the end of a string', function() {
      eq(trimEndPolyfill('abc   '), 'abc');
    });

    specify(
      'should not remove whitespace from the rest of the string',
      function() {
        eq(trimEndPolyfill(' a b c'), ' a b c');
      }
    );

    context('given an empty string', function() {
      specify('should return an empty string', function() {
        eq(trimEndPolyfill(''), '');
      });
    });

    context('given an string with whitespaces only', function() {
      specify('should return an empty string', function() {
        eq(trimEndPolyfill('   '), '');
      });
    });

    specify('should support placeholder to specify "gaps"', function() {
      const trimEnd = trimEndPolyfill(R.__);

      eq(trimEnd('abc   '), 'abc');
    });
  });
});

describe('trimRight', function() {
  it('should be alias of trimEnd', function() {
    eq(RA.trimRight === RA.trimEnd, true);
  });
});
