import * as RA from '../src';
import eq from './shared/eq';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isObjLike', function() {
  it('tests a value for object-like interface', function() {
    eq(RA.isObjLike({}), true);
    eq(RA.isObjLike(Object(true)), true);
    eq(RA.isObjLike(args), true);
    eq(RA.isObjLike([1, 2, 3]), true);
    eq(RA.isObjLike(Object(false)), true);
    eq(RA.isObjLike(new Date()), true);
    eq(RA.isObjLike(new Error()), true);
    eq(RA.isObjLike(RA), true);
    eq(RA.isObjLike({ a: 1 }), true);
    eq(RA.isObjLike(Object(0)), true);
    eq(RA.isObjLike(/x/), true);
    eq(RA.isObjLike(Object('a')), true);

    eq(RA.isObjLike(Symbol), false);
    eq(RA.isObjLike(Array.prototype.slice), false);
    eq(RA.isObjLike(null), false);
    eq(RA.isObjLike(undefined), false);
  });
});

describe('isObjectLike', function() {
  it('tests an alias', function() {
    eq(RA.isObjLike === RA.isObjectLike, true);
  });
});
