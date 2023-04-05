import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import args from './shared/arguments';

describe('isDate', function () {
  it('should test value for a `Date`', function () {
    assert.isTrue(RA.isDate(new Date()));

    assert.isFalse(RA.isDate(Date.now()));
    assert.isFalse(RA.isDate(args));
    assert.isFalse(RA.isDate([1, 2, 3]));
    assert.isFalse(RA.isDate(Object(false)));
    assert.isFalse(RA.isDate(new Error()));
    assert.isFalse(RA.isDate(RA));
    assert.isFalse(RA.isDate(Array.prototype.slice));
    assert.isFalse(RA.isDate({ a: 1 }));
    assert.isFalse(RA.isDate(Object(0)));
    assert.isFalse(RA.isDate(/x/));
    assert.isFalse(RA.isDate(Object('a')));
    assert.isFalse(RA.isDate(Symbol));
    assert.isFalse(RA.isDate(null));
    assert.isFalse(RA.isDate(undefined));
  });

  it('should support placeholder to specify "gaps"', function () {
    const isDate = RA.isDate(R.__);

    assert.isTrue(isDate(new Date()));
  });
});
