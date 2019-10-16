import * as R from 'ramda';

import * as RA from '../src';
import { trimStartInvoker, trimStartPolyfill } from '../src/trimStart';
import eq from './shared/eq';

describe('trimStart', function() {
  specify(
    'should remove whitespace from the beginning of a string',
    function() {
      eq(RA.trimStart('  abc'), 'abc');
    }
  );

  specify(
    'should not remove whitespace from the rest of the string',
    function() {
      eq(RA.trimStart('a b c '), 'a b c ');
    }
  );

  context('given an empty string', function() {
    specify('should return an empty string', function() {
      eq(RA.trimStart(''), '');
    });
  });

  context('given an string with whitespaces only', function() {
    specify('should return an empty string', function() {
      eq(RA.trimStart('   '), '');
    });
  });

  specify('should support placeholder to specify "gaps"', function() {
    const trimStart = RA.trimStart(R.__);

    eq(trimStart('  abc'), 'abc');
  });

  context('trimStartInvoker', function() {
    beforeEach(function() {
      if (RA.isNotFunction(String.prototype.trimStart)) {
        this.skip();
      }
    });

    specify(
      'should remove whitespace from the beginning of a string',
      function() {
        eq(trimStartInvoker('  abc'), 'abc');
      }
    );

    specify(
      'should not remove whitespace from the rest of the string',
      function() {
        eq(trimStartInvoker('a b c '), 'a b c ');
      }
    );

    context('given an empty string', function() {
      specify('should return an empty string', function() {
        eq(trimStartInvoker(''), '');
      });
    });

    context('given an string with whitespaces only', function() {
      specify('should return an empty string', function() {
        eq(trimStartInvoker('   '), '');
      });
    });

    specify('should support placeholder to specify "gaps"', function() {
      const trimStart = trimStartInvoker(R.__);

      eq(trimStart('  abc'), 'abc');
    });
  });

  context('trimStartPolyfill', function() {
    specify(
      'should remove whitespace from the beginning of a string',
      function() {
        eq(trimStartPolyfill('  abc'), 'abc');
      }
    );

    specify(
      'should not remove whitespace from the rest of the string',
      function() {
        eq(trimStartPolyfill('a b c '), 'a b c ');
      }
    );

    context('given an empty string', function() {
      specify('should return an empty string', function() {
        eq(trimStartPolyfill(''), '');
      });
    });

    context('given an string with whitespaces only', function() {
      specify('should return an empty string', function() {
        eq(trimStartPolyfill('   '), '');
      });
    });

    specify('should support placeholder to specify "gaps"', function() {
      const trimStart = trimStartPolyfill(R.__);

      eq(trimStart('  abc'), 'abc');
    });
  });
});

describe('trimLeft', function() {
  it('tests an alias', function() {
    eq(RA.trimLeft === RA.trimStart, true);
  });
});
