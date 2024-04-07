import { assert } from 'chai';

import * as RA from '../src/index.js';
import { repeatStrInvoker, repeatStrPonyfill } from '../src/repeatStr.js';

describe('repeatStr', function () {
  specify('should repeat string n times', function () {
    assert.strictEqual(RA.repeatStr('abc', 3), 'abcabcabc');
  });

  context('given count 0', function () {
    specify('should return empty string', function () {
      assert.strictEqual(RA.repeatStr('abc', 0), '');
    });
  });

  context('given count 1', function () {
    specify('should return original string', function () {
      assert.strictEqual(RA.repeatStr('abc', 1), 'abc');
    });
  });

  context('given count supplied as float', function () {
    specify('should convert count to integer', function () {
      assert.strictEqual(RA.repeatStr('abc', 3.5), 'abcabcabc');
    });
  });

  context('given count is negative number', function () {
    specify('should throw RangeError', function () {
      assert.throws(() => RA.repeatStr('abc', -1), RangeError);
    });
  });

  context('given count is Infinity', function () {
    specify('should throw RangeError', function () {
      assert.throws(() => RA.repeatStr('abc', 1 / 0), RangeError);
    });
  });

  context('given count is not a number', function () {
    specify('should return empty string', function () {
      assert.strictEqual(RA.repeatStr('abc', 'a'), '');
      assert.strictEqual(RA.repeatStr('abc', null), '');
      assert.strictEqual(RA.repeatStr('abc', undefined), '');
      assert.strictEqual(RA.repeatStr('abc', NaN), '');
    });
  });

  specify('should be curried', function () {
    assert.strictEqual(RA.repeatStr('abc', 3.5), 'abcabcabc');
    assert.strictEqual(RA.repeatStr('abc')(3.5), 'abcabcabc');
  });

  context('repeatStrInvoker', function () {
    before(function () {
      if (RA.isNotFunction(String.prototype.repeat)) {
        this.skip();
      }
    });

    specify('should repeat string n times', function () {
      assert.strictEqual(repeatStrInvoker('abc', 3), 'abcabcabc');
    });

    context('given count 0', function () {
      specify('should return empty string', function () {
        assert.strictEqual(repeatStrInvoker('abc', 0), '');
      });
    });

    context('given count 1', function () {
      specify('should return original string', function () {
        assert.strictEqual(repeatStrInvoker('abc', 1), 'abc');
      });
    });

    context('given count supplied as float', function () {
      specify('should convert count to integer', function () {
        assert.strictEqual(repeatStrInvoker('abc', 3.5), 'abcabcabc');
      });
    });

    context('given count is negative number', function () {
      specify('should throw RangeError', function () {
        assert.throws(() => repeatStrInvoker('abc', -1), RangeError);
      });
    });

    context('given count is Infinity', function () {
      specify('should throw RangeError', function () {
        assert.throws(() => repeatStrInvoker('abc', 1 / 0), RangeError);
      });
    });

    context('given count is not a number', function () {
      specify('should return empty string', function () {
        assert.strictEqual(repeatStrInvoker('abc', 'a'), '');
        assert.strictEqual(repeatStrInvoker('abc', null), '');
        assert.strictEqual(repeatStrInvoker('abc', undefined), '');
        assert.strictEqual(repeatStrInvoker('abc', NaN), '');
      });
    });

    specify('should be curried', function () {
      assert.strictEqual(repeatStrInvoker('abc', 3.5), 'abcabcabc');
      assert.strictEqual(repeatStrInvoker('abc')(3.5), 'abcabcabc');
    });
  });

  context('repeatStrPonyfill', function () {
    specify('should repeat string n times', function () {
      assert.strictEqual(repeatStrPonyfill('abc', 3), 'abcabcabc');
    });

    context('given count 0', function () {
      specify('should return empty string', function () {
        assert.strictEqual(repeatStrPonyfill('abc', 0), '');
      });
    });

    context('given count 1', function () {
      specify('should return original string', function () {
        assert.strictEqual(repeatStrPonyfill('abc', 1), 'abc');
      });
    });

    context('given count supplied as float', function () {
      specify('should convert count to integer', function () {
        assert.strictEqual(repeatStrPonyfill('abc', 3.5), 'abcabcabc');
      });
    });

    context('given count is negative number', function () {
      specify('should throw RangeError', function () {
        assert.throws(() => repeatStrPonyfill('abc', -1), RangeError);
      });
    });

    context('given count is Infinity', function () {
      specify('should throw RangeError', function () {
        assert.throws(() => repeatStrPonyfill('abc', 1 / 0), RangeError);
      });
    });

    context('given count is not a number', function () {
      specify('should return empty string', function () {
        assert.strictEqual(repeatStrPonyfill('abc', 'a'), '');
        assert.strictEqual(repeatStrPonyfill('abc', null), '');
        assert.strictEqual(repeatStrPonyfill('abc', undefined), '');
        assert.strictEqual(repeatStrPonyfill('abc', NaN), '');
      });
    });

    specify('should be curried', function () {
      assert.strictEqual(repeatStrPonyfill('abc', 3.5), 'abcabcabc');
      assert.strictEqual(repeatStrPonyfill('abc')(3.5), 'abcabcabc');
    });
  });
});
