import { assert } from 'chai';

import * as RA from '../src';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNotObjLike', function() {
  it('tests a value for non object-like interface', function() {
    assert.isFalse(RA.isNotObjLike({}));
    assert.isFalse(RA.isNotObjLike(Object(false)));
    assert.isFalse(RA.isNotObjLike(args));
    assert.isFalse(RA.isNotObjLike([1, 2, 3]));
    assert.isFalse(RA.isNotObjLike(Object(false)));
    assert.isFalse(RA.isNotObjLike(new Date()));
    assert.isFalse(RA.isNotObjLike(new Error()));
    assert.isFalse(RA.isNotObjLike(RA));
    assert.isFalse(RA.isNotObjLike({ a: 1 }));
    assert.isFalse(RA.isNotObjLike(Object(0)));
    assert.isFalse(RA.isNotObjLike(/x/));
    assert.isFalse(RA.isNotObjLike(Object('a')));

    assert.isTrue(RA.isNotObjLike(Symbol));
    assert.isTrue(RA.isNotObjLike(Array.prototype.slice));
    assert.isTrue(RA.isNotObjLike(null));
    assert.isTrue(RA.isNotObjLike(undefined));
  });
});

describe('isNotObjectLike', function() {
  it('tests an alias', function() {
    assert.isTrue(RA.isNotObjLike === RA.isNotObjectLike);
  });
});
