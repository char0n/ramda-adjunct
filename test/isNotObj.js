import { assert } from 'chai';

import * as RA from '../src';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNotObj', function() {
  it('tests a value for complement of language type of `Object`', function() {
    assert.isFalse(RA.isNotObj({}));
    assert.isFalse(RA.isNotObj(Object(false)));
    assert.isFalse(RA.isNotObj(Object.create(null)));
    assert.isFalse(RA.isNotObj(args));
    assert.isFalse(RA.isNotObj([1, 2, 3]));
    assert.isFalse(RA.isNotObj(Object(false)));
    assert.isFalse(RA.isNotObj(new Date()));
    assert.isFalse(RA.isNotObj(new Error()));
    assert.isFalse(RA.isNotObj(RA));
    assert.isFalse(RA.isNotObj(Array.prototype.slice));
    assert.isFalse(RA.isNotObj({ a: 1 }));
    assert.isFalse(RA.isNotObj(Object(0)));
    assert.isFalse(RA.isNotObj(/x/));
    assert.isFalse(RA.isNotObj(Object('a')));
    assert.strictEqual(RA.isNotObj(Symbol), typeof Symbol === 'undefined');

    assert.isTrue(RA.isNotObj(null));
    assert.isTrue(RA.isNotObj(undefined));
  });
});

describe('isNotObject', function() {
  it('tests an alias', function() {
    assert.isTrue(RA.isNotObj === RA.isNotObject);
  });
});
