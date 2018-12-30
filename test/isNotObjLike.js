import * as RA from '../src';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNotObjLike', function() {
  it('tests a value for non object-like interface', function() {
    eq(RA.isNotObjLike({}), false);
    eq(RA.isNotObjLike(Object(false)), false);
    eq(RA.isNotObjLike(args), false);
    eq(RA.isNotObjLike([1, 2, 3]), false);
    eq(RA.isNotObjLike(Object(false)), false);
    eq(RA.isNotObjLike(new Date()), false);
    eq(RA.isNotObjLike(new Error()), false);
    eq(RA.isNotObjLike(RA), false);
    eq(RA.isNotObjLike({ a: 1 }), false);
    eq(RA.isNotObjLike(Object(0)), false);
    eq(RA.isNotObjLike(/x/), false);
    eq(RA.isNotObjLike(Object('a')), false);

    eq(RA.isNotObjLike(Symbol), true);
    eq(RA.isNotObjLike(Array.prototype.slice), true);
    eq(RA.isNotObjLike(null), true);
    eq(RA.isNotObjLike(undefined), true);
  });
});

describe('isNotObjectLike', function() {
  it('tests an alias', function() {
    eq(RA.isNotObjLike === RA.isNotObjectLike, true);
  });
});
