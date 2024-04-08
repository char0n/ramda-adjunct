import { assert } from 'chai';
import * as R from 'ramda';
import monet from 'monet';
import sinon from 'sinon';

import * as RA from '../src/index.js';

const { Just, Nothing } = monet;

describe('notBoth', function () {
  it('should combine two boolean-returning functions into one', function () {
    const even = (x) => x % 2 === 0;
    const gt10 = (x) => x > 10;
    const f = RA.notBoth(even, gt10);

    assert.isTrue(f(8));
    assert.isTrue(f(13));
    assert.isTrue(f(9));
    assert.isFalse(f(14));
  });

  it('should accept functions that take multiple parameters', function () {
    const between = (a, b, c) => a < b && b < c;
    const total20 = (a, b, c) => a + b + c === 20;
    const f = RA.notBoth(between, total20);

    assert.isFalse(f(4, 5, 11));
    assert.isTrue(f(12, 2, 7));
    assert.isTrue(f(12, 2, 6));
    assert.isTrue(f(5, 6, 15));
  });

  context('given the first function returns false', function () {
    specify('should not evaluate the second function', function () {
      const z = sinon.spy();

      RA.notBoth(R.F, z)();
      assert.isTrue(z.notCalled);
    });
  });

  it('should accept fantasy-land applicative functors', function () {
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

  it('should be curried', function () {
    const even = (x) => x % 2 === 0;
    const gt10 = (x) => x > 10;
    const f = RA.notBoth(even)(gt10);

    assert.isTrue(f(8));
  });
});
