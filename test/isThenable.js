import * as RA from '../src/index';
import eq from './shared/eq';
import Symbol from './shared/Symbol';
import args from './shared/arguments';

describe('isThenable', function() {
  context('given value is not `thenable`', function() {
    specify('should return false', function() {
      eq(RA.isThenable(args), false);
      eq(RA.isThenable([1, 2, 3]), false);
      eq(RA.isThenable(true), false);
      eq(RA.isThenable(new Date()), false);
      eq(RA.isThenable(new Error()), false);
      eq(RA.isThenable(Array.prototype.slice), false);
      eq(RA.isThenable({ 0: 1, length: 1 }), false);
      eq(RA.isThenable(1), false);
      eq(RA.isThenable(/x/), false);
      eq(RA.isThenable(Symbol), false);
    });
  });

  context('given value is thenable object', function() {
    specify('should return true', function() {
      eq(RA.isThenable({ then: () => {} }), true);
    });
  });

  context("given value contains then method on it's prototype", function() {
    specify('should return true', function() {
      const objWithPrototype = Object.create({ then: () => {} });

      eq(RA.isThenable(objWithPrototype), true);
    });
  });

  context('given value is an instance of native Promise', function() {
    specify('should return true', function() {
      const resolvedP = Promise.resolve();
      const rejectedP = Promise.reject();

      eq(RA.isThenable(resolvedP), true);
      eq(RA.isThenable(rejectedP), true);

      rejectedP.catch(RA.noop);
    });
  });

  context('given value is a thenable function', function() {
    specify('should return true', function() {
      const func = () => {};
      func.then = () => {};

      eq(RA.isThenable(func), true);
    });
  });
});
