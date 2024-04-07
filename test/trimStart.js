import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import { trimStartInvoker, trimStartPonyfill } from '../src/trimStart.js';

describe('trimStart', function () {
  it('should remove whitespace from the beginning of a string', function () {
    assert.strictEqual(RA.trimStart('  abc'), 'abc');
  });

  it('should not remove whitespace from the rest of the string', function () {
    assert.strictEqual(RA.trimStart('a b c '), 'a b c ');
  });

  context('given an empty string', function () {
    specify('should return an empty string', function () {
      assert.strictEqual(RA.trimStart(''), '');
    });
  });

  context('given an string with whitespaces only', function () {
    specify('should return an empty string', function () {
      assert.strictEqual(RA.trimStart('   '), '');
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const trimStart = RA.trimStart(R.__);

    assert.strictEqual(trimStart('  abc'), 'abc');
  });

  context('trimStartInvoker', function () {
    before(function () {
      if (RA.isNotFunction(String.prototype.trimStart)) {
        this.skip();
      }
    });

    specify(
      'should remove whitespace from the beginning of a string',
      function () {
        assert.strictEqual(trimStartInvoker('  abc'), 'abc');
      }
    );

    specify(
      'should not remove whitespace from the rest of the string',
      function () {
        assert.strictEqual(trimStartInvoker('a b c '), 'a b c ');
      }
    );

    context('given an empty string', function () {
      specify('should return an empty string', function () {
        assert.strictEqual(trimStartInvoker(''), '');
      });
    });

    context('given an string with whitespaces only', function () {
      specify('should return an empty string', function () {
        assert.strictEqual(trimStartInvoker('   '), '');
      });
    });

    specify('should support placeholder to specify "gaps"', function () {
      const trimStart = trimStartInvoker(R.__);

      assert.strictEqual(trimStart('  abc'), 'abc');
    });
  });

  context('trimStartPonyfill', function () {
    specify(
      'should remove whitespace from the beginning of a string',
      function () {
        assert.strictEqual(trimStartPonyfill('  abc'), 'abc');
      }
    );

    specify(
      'should not remove whitespace from the rest of the string',
      function () {
        assert.strictEqual(trimStartPonyfill('a b c '), 'a b c ');
      }
    );

    context('given an empty string', function () {
      specify('should return an empty string', function () {
        assert.strictEqual(trimStartPonyfill(''), '');
      });
    });

    context('given an string with whitespaces only', function () {
      specify('should return an empty string', function () {
        assert.strictEqual(trimStartPonyfill('   '), '');
      });
    });

    specify('should support placeholder to specify "gaps"', function () {
      const trimStart = trimStartPonyfill(R.__);

      assert.strictEqual(trimStart('  abc'), 'abc');
    });
  });
});

describe('trimLeft', function () {
  it('should be alias of trimStart', function () {
    assert.strictEqual(RA.trimLeft, RA.trimStart);
  });
});
