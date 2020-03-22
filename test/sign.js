import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import Symbol from './shared/Symbol';
import { signPolyfill } from '../src/sign';

describe('sign', function () {
  it('should return proper sign result', function () {
    assert.strictEqual(RA.sign(3), 1);
    assert.strictEqual(RA.sign(3.3), 1);
    assert.strictEqual(RA.sign(-3), -1);
    assert.strictEqual(RA.sign(-3.3), -1);
    assert.strictEqual(RA.sign(0), 0);
    assert.strictEqual(RA.sign(-0), -0);
  });

  context('given number in string', function () {
    specify('should return proper sign', function () {
      assert.strictEqual(RA.sign('-1.123'), -1);
      assert.strictEqual(RA.sign('1.123'), 1);
    });
  });

  context('given integer number', function () {
    specify('should return original integer number', function () {
      assert.strictEqual(RA.sign(0), 0);
      assert.strictEqual(RA.sign(1), 1);
      assert.strictEqual(RA.sign(-1), -1);
    });
  });

  context('given value that is not a number', function () {
    specify('should return NaN', function () {
      assert.isNaN(RA.sign(undefined));
      assert.isNaN(RA.sign(NaN));
      assert.isNaN(RA.sign({}));
      assert.isNaN(RA.sign(/a/));
      assert.isNaN(RA.sign('test'));
      assert.isNaN(RA.sign(new Error()));
    });
  });

  context('given null', function () {
    specify('should return 0', function () {
      assert.strictEqual(RA.sign(null), 0);
    });
  });

  context('given Symbol value', function () {
    specify('should throw TypeError', function () {
      let shouldThrow;
      try {
        Math.sign(Symbol(''));
        shouldThrow = false;
      } catch (e) {
        shouldThrow = true;
      }

      if (shouldThrow) {
        assert.throw(() => RA.sign(Symbol('')));
      }
    });
  });

  context('given valid date object', function () {
    specify(
      'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
      function () {
        assert.strictEqual(RA.sign(new Date(2)), 1);
      }
    );
  });

  context('given Infinity value', function () {
    specify('should return proper sign', function () {
      assert.strictEqual(RA.sign(Infinity), 1);
      assert.strictEqual(RA.sign(-Infinity), -1);
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const sign = RA.sign(R.__);

    assert.strictEqual(sign(0.9), 1);
  });

  context('signPolyfill', function () {
    before(function () {
      if (RA.isNotFunction(Math.sign)) {
        this.skip();
      }
    });

    specify('should return proper sign result', function () {
      assert.strictEqual(signPolyfill(3), 1);
      assert.strictEqual(signPolyfill(3.3), 1);
      assert.strictEqual(signPolyfill(-3), -1);
      assert.strictEqual(signPolyfill(-3.3), -1);
      assert.strictEqual(signPolyfill(0), 0);
      assert.strictEqual(signPolyfill(-0), -0);
    });

    context('given number in string', function () {
      specify('should return proper sign', function () {
        assert.strictEqual(signPolyfill('-1.123'), -1);
        assert.strictEqual(signPolyfill('1.123'), 1);
      });
    });

    context('given integer number', function () {
      specify('should return original integer number', function () {
        assert.strictEqual(signPolyfill(0), 0);
        assert.strictEqual(signPolyfill(1), 1);
        assert.strictEqual(signPolyfill(-1), -1);
      });
    });

    context('given value that is not a number', function () {
      specify('should return NaN', function () {
        assert.isNaN(signPolyfill(undefined));
        assert.isNaN(signPolyfill(NaN));
        assert.isNaN(signPolyfill({}));
        assert.isNaN(signPolyfill(/a/));
        assert.isNaN(signPolyfill('test'));
        assert.isNaN(signPolyfill(new Error()));
      });
    });

    context('given null', function () {
      specify('should return 0', function () {
        assert.strictEqual(signPolyfill(null), 0);
      });
    });

    context('given Symbol value', function () {
      specify('should throw TypeError', function () {
        let shouldThrow;
        try {
          Math.sign(Symbol(''));
          shouldThrow = false;
        } catch (e) {
          shouldThrow = true;
        }

        if (shouldThrow) {
          assert.throw(() => signPolyfill(Symbol('')));
        }
      });
    });

    context('given valid date object', function () {
      specify(
        'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
        function () {
          assert.strictEqual(signPolyfill(new Date(2)), 1);
        }
      );
    });

    context('given Infinity value', function () {
      specify('should return proper sign', function () {
        assert.strictEqual(signPolyfill(Infinity), 1);
        assert.strictEqual(signPolyfill(-Infinity), -1);
      });
    });

    specify('should support placeholder to specify "gaps"', function () {
      const sign = RA.sign(R.__);

      assert.strictEqual(sign(0.9), 1);
    });
  });
});
