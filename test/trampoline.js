import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('trampoline', function () {
  context('given a function and its initial arguments', function () {
    specify(
      'should call a function until it returns a non-function value',
      function () {
        assert.strictEqual(RA.trampoline(Math.abs, [-23]), 23);
        assert.strictEqual(RA.trampoline(Math.max, [-9, 3, 12]), 12);
        assert.strictEqual(RA.trampoline(Math.min, [-9, 3, 12]), -9);
        assert.strictEqual(RA.trampoline(Array.isArray, [[]]), true);
        assert.strictEqual(
          RA.trampoline(String.prototype.trim.bind(' I am a string '), []),
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

        assert.isTrue(RA.trampoline(oddOline, [3]));
        assert.isTrue(RA.trampoline(evenOline, [200000]));
        assert.isFalse(RA.trampoline(oddOline, [300000]));

        function nestedFunction(arg) {
          return () => {
            const arg2 = arg;
            return () => {
              const arg3 = arg2;
              return () => arg3;
            };
          };
        }

        assert.strictEqual(RA.trampoline(nestedFunction, [12]), 12);
      }
    );
  });

  it('should support currying', function () {
    assert.strictEqual(RA.trampoline(Math.max, [1, 2, 3]), 3);
    assert.strictEqual(RA.trampoline(Math.max)([1, 2, 3]), 3);
  });
});
