import { Just, Nothing } from 'monet';
import sinon from 'sinon';

import * as RA from '../src/index';
import eq from './shared/eq';


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

    eq(f(8), true);
    eq(f(13), true);
    eq(f(9), true);
    eq(f(14), false);
  });

  it('accepts functions that take multiple parameters', function() {
    const between = (a, b, c) => a < b && b < c;
    const total20 = (a, b, c) => a + b + c === 20;
    const f = RA.notBoth(between, total20);

    eq(f(4, 5, 11), false);
    eq(f(12, 2, 7), true);
    eq(f(12, 2, 6), true);
    eq(f(5, 6, 15), true);
  });

  context('when the first function returns false', function() {
    specify('should not evaluate the second function', function() {
      const f = () => false;
      const z = sinon.spy();

      RA.notBoth(f, z)();
      eq(z.notCalled, true);
    });
  });

  if (isFantasyLandSupported) {
    it('accepts fantasy-land applicative functors', function() {
      eq(RA.notBoth(Just(true), Just(true)), Just(false));
      eq(RA.notBoth(Just(true), Just(false)), Just(true));
      eq(RA.notBoth(Just(false), Just(true)), Just(true));
      eq(RA.notBoth(Just(false), Just(false)), Just(true));
      eq(RA.notBoth(Just(true), Nothing()), Nothing());
      eq(RA.notBoth(Nothing(), Just(true)), Nothing());
      eq(RA.notBoth(Nothing(), Just(false)), Nothing());
      eq(RA.notBoth(Just(false), Nothing()), Nothing());
      eq(RA.notBoth(Nothing(), Nothing()), Nothing());
    });
  }
});
