import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';
import { trimEndInvoker, trimEndPonyfill } from '../src/trimEnd.js';

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

  context('trimEndPonyfill', function () {
    specify('should remove whitespace from the end of a string', function () {
      assert.strictEqual(trimEndPonyfill('abc   '), 'abc');
    });

    specify(
      'should not remove whitespace from the rest of the string',
      function () {
        assert.strictEqual(trimEndPonyfill(' a b c'), ' a b c');
      }
    );

    context('given an empty string', function () {
      specify('should return an empty string', function () {
        assert.strictEqual(trimEndPonyfill(''), '');
      });
    });

    context('given an string with whitespaces only', function () {
      specify('should return an empty string', function () {
        assert.strictEqual(trimEndPonyfill('   '), '');
      });
    });

    specify('should support placeholder to specify "gaps"', function () {
      const trimEnd = trimEndPonyfill(R.__);

      assert.strictEqual(trimEnd('abc   '), 'abc');
    });
  });
});

describe('trimRight', function () {
  it('should be alias of trimEnd', function () {
    assert.strictEqual(RA.trimRight, RA.trimEnd);
  });
});
