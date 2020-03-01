import { assert } from 'chai';

import * as RA from '../src';

describe('fnull', function() {
  context('given function and default arguments', function() {
    specify(
      'should call the function with the given argument and default argument when one of the argument in null',
      function() {
        const add = (a, b) => a + b;

        const safeAdd = RA.fnull(add, [1, 1]);

        const value = safeAdd(1, null);

        assert.equal(value, 2);
      }
    );

    specify(
      'should call the function with the given argument and default argument when one of the argument in undefined',
      function() {
        const add = (a, b) => a + b;

        const safeAdd = RA.fnull(add, [1, 1]);

        const value = safeAdd(1, undefined);

        assert.equal(value, 2);
      }
    );
  });

  it('should curry', async function() {
    const add = (a, b) => a + b;

    const safeAdd = RA.fnull(add);

    const safeAddWithDefaults = safeAdd([1, 1]);

    const value = safeAddWithDefaults(1, null);

    assert.equal(value, 2);
  });
});
