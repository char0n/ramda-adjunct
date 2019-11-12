import { assert } from 'chai';

import * as RA from '../src';
import Symbol from './shared/Symbol';
import args from './shared/arguments';

describe('isTruthy', function() {
  it('tests a value for `truthy`', function() {
    assert.isTrue(RA.isTruthy('abc'));
    assert.isTrue(RA.isTruthy(Object('abc')));
    assert.isTrue(RA.isTruthy(args));
    assert.isTrue(RA.isTruthy([1, 2, 3]));
    assert.isTrue(RA.isTruthy(true));
    assert.isTrue(RA.isTruthy(new Date()));
    assert.isTrue(RA.isTruthy(new Error()));
    assert.isTrue(RA.isTruthy(Array.prototype.slice));
    assert.isTrue(RA.isTruthy({ 0: 1, length: 1 }));
    assert.isTrue(RA.isTruthy(1));
    assert.isTrue(RA.isTruthy(/x/));

    if (Symbol !== 'undefined') {
      assert.isTrue(RA.isTruthy(Symbol));
    }

    assert.isTrue(RA.isTruthy({}));
    assert.isTrue(RA.isTruthy([]));
    assert.isTrue(RA.isTruthy(Infinity));

    assert.isFalse(RA.isTruthy(false));
    assert.isFalse(RA.isTruthy(0));
    assert.isFalse(RA.isTruthy(-0));
    assert.isFalse(RA.isTruthy(''));
    assert.isFalse(RA.isTruthy(null));
    assert.isFalse(RA.isTruthy(undefined));
    assert.isFalse(RA.isTruthy(NaN));
  });
});
