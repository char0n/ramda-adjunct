import { assert } from 'chai';

import * as RA from '../src';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isObjLike', function() {
  it('tests a value for object-like interface', function() {
    assert.isTrue(RA.isObjLike({}));
    assert.isTrue(RA.isObjLike(Object(true)));
    assert.isTrue(RA.isObjLike(args));
    assert.isTrue(RA.isObjLike([1, 2, 3]));
    assert.isTrue(RA.isObjLike(Object(false)));
    assert.isTrue(RA.isObjLike(new Date()));
    assert.isTrue(RA.isObjLike(new Error()));
    assert.isTrue(RA.isObjLike(RA));
    assert.isTrue(RA.isObjLike({ a: 1 }));
    assert.isTrue(RA.isObjLike(Object(0)));
    assert.isTrue(RA.isObjLike(/x/));
    assert.isTrue(RA.isObjLike(Object('a')));

    if (Symbol !== 'undefined') {
      assert.isFalse(RA.isObjLike(Symbol));
    }

    assert.isFalse(RA.isObjLike(Array.prototype.slice));
    assert.isFalse(RA.isObjLike(null));
    assert.isFalse(RA.isObjLike(undefined));
  });
});

describe('isObjectLike', function() {
  it('tests an alias', function() {
    assert.strictEqual(RA.isObjLike, RA.isObjectLike);
  });
});
