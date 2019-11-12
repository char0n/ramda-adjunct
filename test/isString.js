import { assert } from 'chai';

import * as RA from '../src';
import Symbol from './shared/Symbol';
import args from './shared/arguments';

describe('isString', function() {
  it('tests a value for `String`', function() {
    assert.isTrue(RA.isString('abc'));
    assert.isTrue(RA.isString(Object('abc')));

    assert.isFalse(RA.isString(args));
    assert.isFalse(RA.isString([1, 2, 3]));
    assert.isFalse(RA.isString(true));
    assert.isFalse(RA.isString(new Date()));
    assert.isFalse(RA.isString(new Error()));
    assert.isFalse(RA.isString(Array.prototype.slice));
    assert.isFalse(RA.isString({ 0: 1, length: 1 }));
    assert.isFalse(RA.isString(1));
    assert.isFalse(RA.isString(/x/));

    if (Symbol !== 'undefined') {
      assert.isFalse(RA.isString(Symbol));
    }
  });
});
