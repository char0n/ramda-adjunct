import { assert } from 'chai';

import * as RA from '../src';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isValidDate', function() {
  it('tests a value for a valid `Date`', function() {
    assert.isTrue(RA.isValidDate(new Date()));

    assert.isFalse(RA.isValidDate(new Date('a')));
    assert.isFalse(RA.isValidDate(Date.now()));
    assert.isFalse(RA.isValidDate(args));
    assert.isFalse(RA.isValidDate([1, 2, 3]));
    assert.isFalse(RA.isValidDate(Object(false)));
    assert.isFalse(RA.isValidDate(new Error()));
    assert.isFalse(RA.isValidDate(RA));
    assert.isFalse(RA.isValidDate(Array.prototype.slice));
    assert.isFalse(RA.isValidDate({ a: 1 }));
    assert.isFalse(RA.isValidDate(Object(0)));
    assert.isFalse(RA.isValidDate(/x/));
    assert.isFalse(RA.isValidDate(Object('a')));

    if (Symbol !== 'undefined') {
      assert.isFalse(RA.isValidDate(Symbol));
    }

    assert.isFalse(RA.isValidDate(null));
    assert.isFalse(RA.isValidDate(undefined));
  });
});
