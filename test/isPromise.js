import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import Symbol from './shared/Symbol';
import args from './shared/arguments';

describe('isPromise', function () {
  context('given value is not a Promise', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isPromise(args));
      assert.isFalse(RA.isPromise([1, 2, 3]));
      assert.isFalse(RA.isPromise(true));
      assert.isFalse(RA.isPromise(new Date()));
      assert.isFalse(RA.isPromise(new Error()));
      assert.isFalse(RA.isPromise(Array.prototype.slice));
      assert.isFalse(RA.isPromise({ 0: 1, length: 1 }));
      assert.isFalse(RA.isPromise(1));
      assert.isFalse(RA.isPromise(/x/));

      if (Symbol !== 'undefined') {
        assert.isFalse(RA.isPromise(Symbol));
      }
    });
  });

  context('given value is thenable object', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isPromise({ then: () => {} }));
    });
  });

  context("given value contains then method on it's prototype", function () {
    specify('should return false', function () {
      const objWithPrototype = Object.create({ then: () => {} });

      assert.isFalse(RA.isPromise(objWithPrototype));
    });
  });

  context('given value is an instance of native Promise', function () {
    const hasNativePromise =
      typeof Promise !== 'undefined' &&
      R.includes('[native code]', Promise.toString());

    specify('should return true', function () {
      const resolvedP = Promise.resolve();
      const rejectedP = Promise.reject();

      assert.strictEqual(RA.isPromise(resolvedP), hasNativePromise);
      assert.strictEqual(RA.isPromise(rejectedP), hasNativePromise);

      rejectedP.catch(RA.noop);
    });
  });

  context('given value is a thenable function', function () {
    specify('should return false', function () {
      const func = () => {};
      func.then = () => {};

      assert.isFalse(RA.isPromise(func));
    });
  });

  it('should support placeholder to specify "gaps"', function () {
    const isPromise = RA.isPromise(R.__);

    assert.isFalse(isPromise(1));
  });
});
