import { assert } from 'chai';

import * as RA from '../src';
import { repeatStrInvoker, repeatStrPolyfill } from '../src/repeatStr';

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

  context('repeatStrPolyfill', function () {
    specify('should repeat string n times', function () {
      assert.strictEqual(repeatStrPolyfill('abc', 3), 'abcabcabc');
    });

    context('given count 0', function () {
      specify('should return empty string', function () {
        assert.strictEqual(repeatStrPolyfill('abc', 0), '');
      });
    });

    context('given count 1', function () {
      specify('should return original string', function () {
        assert.strictEqual(repeatStrPolyfill('abc', 1), 'abc');
      });
    });

    context('given count supplied as float', function () {
      specify('should convert count to integer', function () {
        assert.strictEqual(repeatStrPolyfill('abc', 3.5), 'abcabcabc');
      });
    });

    context('given count is negative number', function () {
      specify('should throw RangeError', function () {
        assert.throws(() => repeatStrPolyfill('abc', -1), RangeError);
      });
    });

    context('given count is Infinity', function () {
      specify('should throw RangeError', function () {
        assert.throws(() => repeatStrPolyfill('abc', 1 / 0), RangeError);
      });
    });

    context('given count is not a number', function () {
      specify('should return empty string', function () {
        assert.strictEqual(repeatStrPolyfill('abc', 'a'), '');
        assert.strictEqual(repeatStrPolyfill('abc', null), '');
        assert.strictEqual(repeatStrPolyfill('abc', undefined), '');
        assert.strictEqual(repeatStrPolyfill('abc', NaN), '');
      });
    });

    specify('should be curried', function () {
      assert.strictEqual(repeatStrPolyfill('abc', 3.5), 'abcabcabc');
      assert.strictEqual(repeatStrPolyfill('abc')(3.5), 'abcabcabc');
    });
  });
});
