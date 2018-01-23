import { T } from 'ramda';
import { Just, Nothing } from 'monet';
import sinon from 'sinon';

import * as RA from '../src/index';
import eq from './shared/eq';


const supportsFantasyLand = () => {
  try {
    return RA.neither(Just(false), Just(true)).equals(Just(false));
  } catch (e) {
    return false;
  }
};

describe('neither', function () {
  const isFantasyLandSupported = supportsFantasyLand();

  it('combines two boolean-returning functions into one', function () {
    const even = x => x % 2 === 0;
    const gt10 = x => x > 10;
    const f = RA.neither(even, gt10);

    eq(f(8), false);
    eq(f(13), false);
    eq(f(14), false);
    eq(f(9), true);
  });

  it('accepts functions that take multiple parameters', function () {
    const between = (a, b, c) => a < b && b < c;
    const total20 = (a, b, c) => a + b + c === 20;
    const f = RA.neither(between, total20);

    eq(f(4, 5, 11), false);
    eq(f(12, 2, 6), false);
    eq(f(5, 6, 15), false);
    eq(f(12, 2, 7), true);
  });

  context('when the result of first function is true', function () {
    specify('should not evaluate the second expression', function () {
      const z = sinon.spy();

      RA.neither(T, z)();
      eq(z.notCalled, true);
    });
  });

  if (isFantasyLandSupported) {
    it('accepts fantasy-land applicative functors', function () {
      eq(RA.neither(Just(true), Just(true)), Just(false));
      eq(RA.neither(Just(true), Just(false)), Just(false));
      eq(RA.neither(Just(false), Just(true)), Just(false));
      eq(RA.neither(Just(false), Just(false)), Just(true));
      eq(RA.neither(Just(true), Nothing()), Nothing());
      eq(RA.neither(Nothing(), Just(true)), Nothing());
      eq(RA.neither(Nothing(), Just(false)), Nothing());
      eq(RA.neither(Just(false), Nothing()), Nothing());
      eq(RA.neither(Nothing(), Nothing()), Nothing());
    });
  }
});
