import * as RA from '../src/index';
import eq from './shared/eq';
import Symbol from './shared/Symbol';
import args from './shared/arguments';


describe('isThenable', function() {
  it('tests a value for `thenable`', function() {
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

  it('tests an object for `thenable`', function() {
    eq(RA.isThenable({ then: () => {} }), true);
  });

  it('tests an object prototype for `thenable`', function() {
    const objWithPrototype = Object.create({ then: () => {} });

    eq(RA.isThenable(objWithPrototype), true);
  });

  it('tests a promise for `thenable`', function() {
    eq(RA.isThenable(Promise.resolve()), true);
    eq(RA.isThenable(Promise.reject()), true);
  });

  it('tests a function for `thenable`', function() {
    const func = () => {};
    func.then = () => {};

    eq(RA.isThenable(func), true);
  });
});
