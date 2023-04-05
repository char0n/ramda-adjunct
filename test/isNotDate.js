import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import args from './shared/arguments';

describe('isNotDate', function () {
  context('given date object', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isNotDate(new Date()));
    });
  });

  context('given non date object', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isNotDate(Date.now()));
      assert.isTrue(RA.isNotDate(args));
      assert.isTrue(RA.isNotDate([1, 2, 3]));
      assert.isTrue(RA.isNotDate(Object(true)));
      assert.isTrue(RA.isNotDate(new Error()));
      assert.isTrue(RA.isNotDate(RA));
      assert.isTrue(RA.isNotDate(Array.prototype.slice));
      assert.isTrue(RA.isNotDate({ a: 1 }));
      assert.isTrue(RA.isNotDate(Object(0)));
      assert.isTrue(RA.isNotDate(/x/));
      assert.isTrue(RA.isNotDate(Object('a')));
      assert.isTrue(RA.isNotDate(Symbol));
      assert.isTrue(RA.isNotDate(null));
      assert.isTrue(RA.isNotDate(undefined));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isNotDate = RA.isNotDate(R.__);

    assert.isTrue(isNotDate(-1));
  });
});
