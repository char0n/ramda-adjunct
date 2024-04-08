import { assert } from 'chai';
import * as R from 'ramda';
import monet from 'monet';
import sinon from 'sinon';

import * as RA from '../src/index.js';

const { Just, Nothing } = monet;

const supportsFantasyLand = () => {
  try {
    return RA.neither(Just(false), Just(true)).equals(Just(false));
  } catch (e) {
    return false;
  }
};

describe('neither', function () {
  const isFantasyLandSupported = supportsFantasyLand();

  it('should combine two boolean-returning functions into one', function () {
    const even = (x) => x % 2 === 0;
    const gt10 = (x) => x > 10;
    const f = RA.neither(even, gt10);

    assert.isFalse(f(8));
    assert.isFalse(f(13));
    assert.isFalse(f(14));
    assert.isTrue(f(9));
  });

  it('should accept functions that takes multiple parameters', function () {
    const between = (a, b, c) => a < b && b < c;
    const total20 = (a, b, c) => a + b + c === 20;
    const f = RA.neither(between, total20);

    assert.isFalse(f(4, 5, 11));
    assert.isFalse(f(12, 2, 6));
    assert.isFalse(f(5, 6, 15));
    assert.isTrue(f(12, 2, 7));
  });

  context('given the result of first function is true', function () {
    specify('should not evaluate the second expression', function () {
      const z = sinon.spy();

      RA.neither(R.T, z)();
      assert.isTrue(z.notCalled);
    });
  });

  if (isFantasyLandSupported) {
    it('should accept fantasy-land applicative functors', function () {
      assert.isTrue(R.equals(RA.neither(Just(true), Just(true)), Just(false)));
      assert.isTrue(R.equals(RA.neither(Just(true), Just(false)), Just(false)));
      assert.isTrue(R.equals(RA.neither(Just(false), Just(true)), Just(false)));
      assert.isTrue(R.equals(RA.neither(Just(false), Just(false)), Just(true)));
      assert.isTrue(R.equals(RA.neither(Just(true), Nothing()), Nothing()));
      assert.isTrue(R.equals(RA.neither(Nothing(), Just(true)), Nothing()));
      assert.isTrue(R.equals(RA.neither(Nothing(), Just(false)), Nothing()));
      assert.isTrue(R.equals(RA.neither(Just(false), Nothing()), Nothing()));
      assert.isTrue(R.equals(RA.neither(Nothing(), Nothing()), Nothing()));
    });
  }

  it('should be curried', function () {
    const even = (x) => x % 2 === 0;
    const gt10 = (x) => x > 10;
    const f = RA.neither(even)(gt10);

    assert.isFalse(f(8));
    assert.isTrue(f(9));
  });
});
