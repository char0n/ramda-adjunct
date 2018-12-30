import * as R from 'ramda';

import * as RA from '../src';
import eq from './shared/eq';
import Symbol from './shared/Symbol';
import args from './shared/arguments';
import genFunc from './shared/genFunc';
import asyncFunc from './shared/asyncFunc';

describe('isFunction', function() {
  it('should test value for a `Function`', function() {
    eq(RA.isFunction(genFunc), typeof genFunc === 'function');
    eq(RA.isFunction(asyncFunc), typeof asyncFunc === 'function');
    eq(RA.isFunction(Symbol), typeof Symbol === 'function');
    eq(RA.isFunction(() => {}), true);
    eq(RA.isFunction(function() {}), true);
    eq(RA.isFunction(Array.prototype.slice), true);
    eq(RA.isFunction(args), false);
    eq(RA.isFunction([1, 2, 3]), false);
    eq(RA.isFunction(true), false);
    eq(RA.isFunction(new Date()), false);
    eq(RA.isFunction(new Error()), false);
    eq(RA.isFunction({ 0: 1, length: 1 }), false);
    eq(RA.isFunction(1), false);
    eq(RA.isFunction(/x/), false);
  });

  it('should support placeholder to specify "gaps"', function() {
    const isFunction = RA.isFunction(R.__);

    eq(isFunction(genFunc), true);
  });
});
