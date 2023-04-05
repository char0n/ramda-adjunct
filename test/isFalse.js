import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import args from './shared/arguments';

describe('isFalse', function () {
  it("should test value for 'false' primitive", function () {
    assert.isTrue(RA.isFalse(false));
    assert.isTrue(RA.isFalse(Boolean(false)));

    assert.isFalse(RA.isFalse(true));
    assert.isFalse(RA.isFalse(Boolean(true)));
    assert.isFalse(RA.isTrue(new Boolean(true)));
    assert.isFalse(RA.isTrue(new Boolean(false)));
    assert.isFalse(RA.isFalse('false'));
    assert.isFalse(RA.isFalse('abc'));
    assert.isFalse(RA.isFalse(Object('abc')));
    assert.isFalse(RA.isFalse(args));
    assert.isFalse(RA.isFalse([1, 2, 3]));
    assert.isFalse(RA.isFalse(new Date()));
    assert.isFalse(RA.isFalse(new Error()));
    assert.isFalse(RA.isFalse(Array.prototype.slice));
    assert.isFalse(RA.isFalse({ 0: 1, length: 1 }));
    assert.isFalse(RA.isFalse(/x/));
    assert.isFalse(RA.isFalse({}));
    assert.isFalse(RA.isFalse([]));
    assert.isFalse(RA.isFalse(Infinity));
    assert.isFalse(RA.isFalse(-0));
    assert.isFalse(RA.isFalse(0));
    assert.isFalse(RA.isFalse(1));
    assert.isFalse(RA.isFalse(''));
    assert.isFalse(RA.isFalse(null));
    assert.isFalse(RA.isFalse(undefined));
    assert.isFalse(RA.isFalse(NaN));
    assert.isFalse(RA.isFalse(Symbol));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isFalse = RA.isFalse(R.__);

    assert.isTrue(isFalse(false));
  });
});
