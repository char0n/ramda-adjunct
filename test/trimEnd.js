import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import { trimEndInvoker, trimEndPolyfill } from '../src/trimEnd';

describe('trimEnd', function () {
  it('should remove whitespace from the end of a string', function () {
    assert.strictEqual(RA.trimEnd('abc   '), 'abc');
  });

  it('should not remove whitespace from the rest of the string', function () {
    assert.strictEqual(RA.trimEnd(' a b c'), ' a b c');
  });

  context('given an empty string', function () {
    specify('should return an empty string', function () {
      assert.strictEqual(RA.trimEnd(''), '');
    });
  });

  context('given an string with whitespaces only', function () {
    specify('should return an empty string', function () {
      assert.strictEqual(RA.trimEnd('   '), '');
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const trimEnd = RA.trimEnd(R.__);

    assert.strictEqual(trimEnd('abc   '), 'abc');
  });

  context('trimEndInvoker', function () {
    before(function () {
      if (RA.isNotFunction(String.prototype.trimEnd)) {
        this.skip();
      }
    });

    specify('should remove whitespace from the end of a string', function () {
      assert.strictEqual(trimEndInvoker('abc   '), 'abc');
    });

    specify(
      'should not remove whitespace from the rest of the string',
      function () {
        assert.strictEqual(trimEndInvoker(' a b c'), ' a b c');
      }
    );

    context('given an empty string', function () {
      specify('should return an empty string', function () {
        assert.strictEqual(trimEndInvoker(''), '');
      });
    });

    context('given an string with whitespaces only', function () {
      specify('should return an empty string', function () {
        assert.strictEqual(trimEndInvoker('   '), '');
      });
    });

    specify('should support placeholder to specify "gaps"', function () {
      const trimEnd = trimEndInvoker(R.__);

      assert.strictEqual(trimEnd('abc   '), 'abc');
    });
  });

  context('trimEndPolyfill', function () {
    specify('should remove whitespace from the end of a string', function () {
      assert.strictEqual(trimEndPolyfill('abc   '), 'abc');
    });

    specify(
      'should not remove whitespace from the rest of the string',
      function () {
        assert.strictEqual(trimEndPolyfill(' a b c'), ' a b c');
      }
    );

    context('given an empty string', function () {
      specify('should return an empty string', function () {
        assert.strictEqual(trimEndPolyfill(''), '');
      });
    });

    context('given an string with whitespaces only', function () {
      specify('should return an empty string', function () {
        assert.strictEqual(trimEndPolyfill('   '), '');
      });
    });

    specify('should support placeholder to specify "gaps"', function () {
      const trimEnd = trimEndPolyfill(R.__);

      assert.strictEqual(trimEnd('abc   '), 'abc');
    });
  });
});

describe('trimRight', function () {
  it('should be alias of trimEnd', function () {
    assert.strictEqual(RA.trimRight, RA.trimEnd);
  });
});
