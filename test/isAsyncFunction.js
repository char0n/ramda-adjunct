import * as RA from '../src/index';
import eq from './shared/eq';
import Symbol from './shared/Symbol';
import args from './shared/arguments';
import asyncFunc from './shared/asyncFunc';


describe('isAsyncFunction', function () {
  it('tests a value for `Async Function`', function () {
    eq(RA.isAsyncFunction(asyncFunc), typeof asyncFunc === 'function');
    eq(RA.isAsyncFunction(args), false);
    eq(RA.isAsyncFunction([1, 2, 3]), false);
    eq(RA.isAsyncFunction(true), false);
    eq(RA.isAsyncFunction(new Date()), false);
    eq(RA.isAsyncFunction(new Error()), false);
    eq(RA.isAsyncFunction(Array.prototype.slice), false);
    eq(RA.isAsyncFunction({ 0: 1, length: 1 }), false);
    eq(RA.isAsyncFunction(1), false);
    eq(RA.isAsyncFunction(/x/), false);
    eq(RA.isAsyncFunction(Symbol), false);
  });
});
