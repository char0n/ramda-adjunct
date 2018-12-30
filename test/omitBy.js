import { notStrictEqual, deepStrictEqual } from 'assert';
import * as R from 'ramda';

import * as RA from '../src';
import eq from './shared/eq';

describe('omitBy', function() {
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };

  it('should create a copy of the object', function() {
    notStrictEqual(RA.omitBy(R.F, obj), obj);
    deepStrictEqual(RA.omitBy(R.F, obj), obj);
  });

  context('given the predicate returns truthy', function() {
    specify('should omit the key', function() {
      eq(RA.omitBy(R.T, obj), {});
      eq(RA.omitBy(R.always({}), obj), {});
      eq(RA.omitBy(R.always(1), obj), {});
    });
  });

  context('given the predicate returns falsy', function() {
    specify('should keep the key', function() {
      eq(RA.omitBy(R.F, obj), obj);
      eq(RA.omitBy(R.always(0), obj), obj);
      eq(RA.omitBy(R.always(null), obj), obj);
    });
  });

  it('should be called with (val, key, obj)', function() {
    eq(
      RA.omitBy(function(val, key, _obj) {
        eq(_obj, obj);
        return key === 'd' && val === 4;
      }, obj),
      { a: 1, b: 2, c: 3, e: 5, f: 6 }
    );
  });

  it('should retrieve prototype properties', function() {
    const F = function(param) {
      this.x = param;
    };
    F.prototype.y = 40;
    F.prototype.z = 50;
    const foo = new F(30);
    foo.v = 10;
    foo.w = 20;
    eq(
      RA.omitBy(function(val) {
        return val >= 45;
      }, foo),
      { v: 10, w: 20, x: 30, y: 40 }
    );
  });

  it('should be curried', function() {
    const copier = RA.omitBy(R.F);
    eq(copier(obj), obj);
  });
});
