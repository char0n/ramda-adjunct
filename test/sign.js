import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import Symbol from './shared/Symbol';
import { signPonyfill } from '../src/sign';

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

  context('signPonyfill', function () {
    before(function () {
      if (RA.isNotFunction(Math.sign)) {
        this.skip();
      }
    });

    specify('should return proper sign result', function () {
      assert.strictEqual(signPonyfill(3), 1);
      assert.strictEqual(signPonyfill(3.3), 1);
      assert.strictEqual(signPonyfill(-3), -1);
      assert.strictEqual(signPonyfill(-3.3), -1);
      assert.strictEqual(signPonyfill(0), 0);
      assert.strictEqual(signPonyfill(-0), -0);
    });

    context('given number in string', function () {
      specify('should return proper sign', function () {
        assert.strictEqual(signPonyfill('-1.123'), -1);
        assert.strictEqual(signPonyfill('1.123'), 1);
      });
    });

    context('given integer number', function () {
      specify('should return original integer number', function () {
        assert.strictEqual(signPonyfill(0), 0);
        assert.strictEqual(signPonyfill(1), 1);
        assert.strictEqual(signPonyfill(-1), -1);
      });
    });

    context('given value that is not a number', function () {
      specify('should return NaN', function () {
        assert.isNaN(signPonyfill(undefined));
        assert.isNaN(signPonyfill(NaN));
        assert.isNaN(signPonyfill({}));
        assert.isNaN(signPonyfill(/a/));
        assert.isNaN(signPonyfill('test'));
        assert.isNaN(signPonyfill(new Error()));
      });
    });

    context('given null', function () {
      specify('should return 0', function () {
        assert.strictEqual(signPonyfill(null), 0);
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
          assert.throw(() => signPonyfill(Symbol('')));
        }
      });
    });

    context('given valid date object', function () {
      specify(
        'should return the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC',
        function () {
          assert.strictEqual(signPonyfill(new Date(2)), 1);
        }
      );
    });

    context('given Infinity value', function () {
      specify('should return proper sign', function () {
        assert.strictEqual(signPonyfill(Infinity), 1);
        assert.strictEqual(signPonyfill(-Infinity), -1);
      });
    });

    specify('should support placeholder to specify "gaps"', function () {
      const sign = RA.sign(R.__);

      assert.strictEqual(sign(0.9), 1);
    });
  });
});
