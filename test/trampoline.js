import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('trampoline', function () {
  context('given a function and its initial arguments', function () {
    specify(
      'should call a function until it returns a non-function value',
      function () {
        assert.strictEqual(RA.trampoline(Math.abs, -23), 23);
        assert.strictEqual(RA.trampoline(Math.max, -9, 3, 12), 12);
        assert.strictEqual(RA.trampoline(Math.min, -9, 3, 12), -9);
        assert.strictEqual(RA.trampoline(Array.isArray, []), true);
        assert.strictEqual(
          RA.trampoline(
            String.prototype.trim.bind(' I am a string '),
            undefined
          ),
          'I am a string'
        );

        function evenOline(n) {
          if (n === 0) {
            return true;
          }
          // eslint-disable-next-line no-use-before-define
          return R.partial(oddOline, [Math.abs(n) - 1]);
        }
        function oddOline(n) {
          if (n === 0) {
            return false;
          }
          return R.partial(evenOline, [Math.abs(n) - 1]);
        }

        assert.isTrue(RA.trampoline(oddOline, 3));
        assert.isTrue(RA.trampoline(evenOline, 200000));
        assert.isFalse(RA.trampoline(oddOline, 300000));

        function nestedFunction(arg) {
          return () => {
            const arg2 = arg;
            return () => {
              const arg3 = arg2;
              return () => arg3;
            };
          };
        }

        assert.strictEqual(RA.trampoline(nestedFunction, 12), 12);
      }
    );
  });

  it('should support currying', function () {
    const isArray = RA.trampoline(Array.isArray);

    assert.isTrue(isArray([]));
    assert.isFalse(isArray(() => {}));

    const max = RA.trampoline(Math.max);

    assert.equal(max(1, 2, 3), 3);
  });

  it('should support placeholder to specify "gaps"', function () {
    let trampoline = RA.trampoline(R.__, []);
    assert.isTrue(trampoline(Array.isArray));

    trampoline = RA.trampoline(Array.isArray, R.__);
    assert.isTrue(trampoline([]));

    trampoline = RA.trampoline(R.__, 1);
    assert.equal(trampoline(Math.max), 1);

    trampoline = RA.trampoline(Math.max, R.__);
    assert.equal(trampoline(1, 2, 3), 3);
  });
});
