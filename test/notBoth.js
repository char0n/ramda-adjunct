import { assert } from 'chai';
import * as R from 'ramda';
import { Just, Nothing } from 'monet';
import sinon from 'sinon';

import * as RA from '../src';

const supportsFantasyLand = () => {
  try {
    return RA.notBoth(Just(true), Just(true)).equals(Just(false));
  } catch (e) {
    return false;
  }
};

describe('notBoth', function() {
  const isFantasyLandSupported = supportsFantasyLand();

  it('combines two boolean-returning functions into one', function() {
    const even = x => x % 2 === 0;
    const gt10 = x => x > 10;
    const f = RA.notBoth(even, gt10);

    assert.isTrue(f(8));
    assert.isTrue(f(13));
    assert.isTrue(f(9));
    assert.isFalse(f(14));
  });

  it('accepts functions that take multiple parameters', function() {
    const between = (a, b, c) => a < b && b < c;
    const total20 = (a, b, c) => a + b + c === 20;
    const f = RA.notBoth(between, total20);

    assert.isFalse(f(4, 5, 11));
    assert.isTrue(f(12, 2, 7));
    assert.isTrue(f(12, 2, 6));
    assert.isTrue(f(5, 6, 15));
  });

  context('given the first function returns false', function() {
    specify('should not evaluate the second function', function() {
      const z = sinon.spy();

      RA.notBoth(R.F, z)();
      assert.isTrue(z.notCalled);
    });
  });

  if (isFantasyLandSupported) {
    it('accepts fantasy-land applicative functors', function() {
      assert.isTrue(R.equals(RA.notBoth(Just(true), Just(true)), Just(false)));
      assert.isTrue(R.equals(RA.notBoth(Just(true), Just(false)), Just(true)));
      assert.isTrue(R.equals(RA.notBoth(Just(false), Just(true)), Just(true)));
      assert.isTrue(R.equals(RA.notBoth(Just(false), Just(false)), Just(true)));
      assert.isTrue(R.equals(RA.notBoth(Just(true), Nothing()), Nothing()));
      assert.isTrue(R.equals(RA.notBoth(Nothing(), Just(true)), Nothing()));
      assert.isTrue(R.equals(RA.notBoth(Nothing(), Just(false)), Nothing()));
      assert.isTrue(R.equals(RA.notBoth(Just(false), Nothing()), Nothing()));
      assert.isTrue(R.equals(RA.notBoth(Nothing(), Nothing()), Nothing()));
    });
  }
});
