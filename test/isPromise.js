import { contains } from 'ramda';

import * as RA from '../src/index';
import eq from './shared/eq';
import Symbol from './shared/Symbol';
import args from './shared/arguments';


describe('isPromise', function() {
  context('when value is not a Promise', function() {
    specify('should return false', function() {
      eq(RA.isPromise(args), false);
      eq(RA.isPromise([1, 2, 3]), false);
      eq(RA.isPromise(true), false);
      eq(RA.isPromise(new Date()), false);
      eq(RA.isPromise(new Error()), false);
      eq(RA.isPromise(Array.prototype.slice), false);
      eq(RA.isPromise({ 0: 1, length: 1 }), false);
      eq(RA.isPromise(1), false);
      eq(RA.isPromise(/x/), false);
      eq(RA.isPromise(Symbol), false);
    });
  });

  context('when value is thenable object', function() {
    specify('should return false', function() {
      eq(RA.isPromise({ then: () => {} }), false);
    });
  });

  context("when value contains then method on it's prototype", function() {
    specify('should return false', function() {
      const objWithPrototype = Object.create({ then: () => {} });

      eq(RA.isPromise(objWithPrototype), false);
    });
  });

  context('when value is an instance of native Promise', function() {
    let hasNativePromise;

    beforeEach(function() {
      hasNativePromise = typeof Promise !== 'undefined' && contains('[native code]', Promise.toString());
    });

    specify('should return true', function() {
      eq(RA.isPromise(Promise.resolve()), hasNativePromise);
      eq(RA.isPromise(Promise.reject()), hasNativePromise);
    });
  });

  context('when value is a thenable function', function() {
    specify('should return false', function() {
      const func = () => {};
      func.then = () => {};

      eq(RA.isPromise(func), false);
    });
  });
});
