import { assert } from 'chai';

import * as RA from '../src';
import Symbol from './shared/Symbol';
import args from './shared/arguments';

describe('isTrue', function() {
  it("tests whether a value is 'true' primative", function() {
    assert.isTrue(RA.isTrue(true));
    assert.isTrue(RA.isTrue(Boolean(true)));

    assert.isFalse(RA.isTrue(false));
    assert.isFalse(RA.isTrue(Boolean(false)));
    assert.isFalse(RA.isTrue(new Boolean(true)));
    assert.isFalse(RA.isTrue(new Boolean(false)));
    assert.isFalse(RA.isTrue('true'));
    assert.isFalse(RA.isTrue('abc'));
    assert.isFalse(RA.isTrue(Object('abc')));
    assert.isFalse(RA.isTrue(args));
    assert.isFalse(RA.isTrue([1, 2, 3]));
    assert.isFalse(RA.isTrue(new Date()));
    assert.isFalse(RA.isTrue(new Error()));
    assert.isFalse(RA.isTrue(Array.prototype.slice));
    assert.isFalse(RA.isTrue({ 0: 1, length: 1 }));
    assert.isFalse(RA.isTrue(/x/));
    assert.isFalse(RA.isTrue({}));
    assert.isFalse(RA.isTrue([]));
    assert.isFalse(RA.isTrue(Infinity));
    assert.isFalse(RA.isTrue(-0));
    assert.isFalse(RA.isTrue(0));
    assert.isFalse(RA.isTrue(1));
    assert.isFalse(RA.isTrue(''));
    assert.isFalse(RA.isTrue(null));
    assert.isFalse(RA.isTrue(undefined));
    assert.isFalse(RA.isTrue(NaN));

    if (Symbol !== 'undefined') {
      assert.isFalse(RA.isTrue(Symbol));
    }
  });
});
