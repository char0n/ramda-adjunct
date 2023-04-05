import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import args from './shared/arguments';

describe('isThenable', function () {
  context('given value is not `thenable`', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isThenable(args));
      assert.isFalse(RA.isThenable([1, 2, 3]));
      assert.isFalse(RA.isThenable(true));
      assert.isFalse(RA.isThenable(new Date()));
      assert.isFalse(RA.isThenable(new Error()));
      assert.isFalse(RA.isThenable(Array.prototype.slice));
      assert.isFalse(RA.isThenable({ 0: 1, length: 1 }));
      assert.isFalse(RA.isThenable(1));
      assert.isFalse(RA.isThenable(/x/));
      assert.isFalse(RA.isThenable(Symbol));
    });
  });

  context('given value is thenable object', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isThenable({ then: () => {} }));
    });
  });

  context("given value contains then method on it's prototype", function () {
    specify('should return true', function () {
      const objWithPrototype = Object.create({ then: () => {} });

      assert.isTrue(RA.isThenable(objWithPrototype));
    });
  });

  context('given value is an instance of native Promise', function () {
    specify('should return true', function () {
      const resolvedP = Promise.resolve();
      const rejectedP = Promise.reject();

      assert.isTrue(RA.isThenable(resolvedP));
      assert.isTrue(RA.isThenable(rejectedP));

      rejectedP.catch(RA.noop);
    });
  });

  context('given value is a thenable function', function () {
    specify('should return true', function () {
      const func = () => {};
      func.then = () => {};

      assert.isTrue(RA.isThenable(func));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isThenable = RA.isThenable(R.__);

    assert.isFalse(isThenable(1));
  });
});
