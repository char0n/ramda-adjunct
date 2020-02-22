import { assert } from 'chai';

import * as RA from '../src';

describe('fNull', function() {
  context('given function but no default arguments', function() {
    specify('should call the function with the given arguments', function() {
      const add = (a, b) => a + b;

      const safeAdd = RA.fNull(add, []);

      const value = safeAdd(1, 2);

      assert.equal(value, 3);
    });

    specify(
      'should call the function with the given argument and undefined',
      function() {
        const add = (a, b) => a + b;

        const safeAdd = RA.fNull(add, []);

        const value = safeAdd(1, null);

        assert.isNaN(value);
      }
    );
  });

  context('given function and default arguments', function() {
    specify(
      'should call the function with the given argument and null default argument',
      function() {
        const add = (a, b, c) => a + b + c;

        const safeAdd = RA.fNull(add, null);

        const value = safeAdd(1, 1, null);

        assert.equal(value, 2);
      }
    );
    specify(
      'should call the function with the given argument and default argument when one of the argument in null',
      function() {
        const add = (a, b) => a + b;

        const safeAdd = RA.fNull(add, [1, 1]);

        const value = safeAdd(1, null);

        assert.equal(value, 2);
      }
    );

    specify(
      'should call the function with the given argument and default argument when one of the argument in undefined',
      function() {
        const add = (a, b) => a + b;

        const safeAdd = RA.fNull(add, [1, 1]);

        const value = safeAdd(1, undefined);

        assert.equal(value, 2);
      }
    );
  });

  context('given argument which is not a function', function() {
    specify('should return undefined', function() {
      const safeAdd = RA.fNull(null, [1, 1]);

      const value = safeAdd(1);

      assert.isUndefined(value);
    });
  });

  it('should curry', async function() {
    const add = (a, b) => a + b;

    const safeAdd = RA.fNull(add);

    const safeAddWithDefaults = safeAdd([1, 1]);

    const value = safeAddWithDefaults(1, null);

    assert.equal(value, 2);
  });
});
