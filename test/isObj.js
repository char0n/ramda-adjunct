import { assert } from 'chai';

import * as RA from '../src';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isObj', function() {
  it('tests a value for language type of `Object`', function() {
    assert.isTrue(RA.isObj({}));
    assert.isTrue(RA.isObj(Object(true)));
    assert.isTrue(RA.isObj(Object.create(null)));
    assert.isTrue(RA.isObj(args));
    assert.isTrue(RA.isObj([1, 2, 3]));
    assert.isTrue(RA.isObj(Object(false)));
    assert.isTrue(RA.isObj(new Date()));
    assert.isTrue(RA.isObj(new Error()));
    assert.isTrue(RA.isObj(RA));
    assert.isTrue(RA.isObj(Array.prototype.slice));
    assert.isTrue(RA.isObj({ a: 1 }));
    assert.isTrue(RA.isObj(Object(0)));
    assert.isTrue(RA.isObj(/x/));
    assert.isTrue(RA.isObj(Object('a')));

    if (Symbol !== 'undefined') {
      assert.isTrue(RA.isObj(Symbol));
    }

    assert.isFalse(RA.isObj(null));
    assert.isFalse(RA.isObj(undefined));
  });
});

describe('isObject', function() {
  it('tests an alias', function() {
    assert.strictEqual(RA.isObj, RA.isObject);
  });
});
