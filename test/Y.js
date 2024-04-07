import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index.js';

describe('Y', function () {
  const makeFact = (givenFact) => (n) => {
    if (n < 2) {
      return 1;
    }
    return n * givenFact(n - 1);
  };

  it('should be able to make a factorial function', function () {
    const factorial = RA.Y(makeFact);

    assert.strictEqual(factorial(5), 120);
  });

  it('should support placeholder to specify "gaps"', function () {
    const y = RA.Y(R.__);
    const factorial = y(makeFact);

    assert.strictEqual(factorial(5), 120);
  });
});
