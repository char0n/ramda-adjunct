import { assert } from 'chai';

import * as RA from '../src';

describe('Y', function () {
  it('tests for making a factorial function', function () {
    const makeFact = (givenFact) => (n) => {
      if (n < 2) {
        return 1;
      }
      return n * givenFact(n - 1);
    };

    const factorial = RA.Y(makeFact);

    assert.strictEqual(factorial(5), 120);
  });
});
