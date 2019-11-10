import { assert } from 'chai';

import * as RA from '../src';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNotValidDate', function() {
  it('tests a value for complement of valid `Date`', function() {
    assert.isFalse(RA.isNotValidDate(new Date()));

    assert.isTrue(RA.isNotValidDate(new Date('a')));
    assert.isTrue(RA.isNotValidDate(Date.now()));
    assert.isTrue(RA.isNotValidDate(args));
    assert.isTrue(RA.isNotValidDate([1, 2, 3]));
    assert.isTrue(RA.isNotValidDate(Object(true)));
    assert.isTrue(RA.isNotValidDate(new Error()));
    assert.isTrue(RA.isNotValidDate(RA));
    assert.isTrue(RA.isNotValidDate(Array.prototype.slice));
    assert.isTrue(RA.isNotValidDate({ a: 1 }));
    assert.isTrue(RA.isNotValidDate(Object(0)));
    assert.isTrue(RA.isNotValidDate(/x/));
    assert.isTrue(RA.isNotValidDate(Object('a')));

    if (Symbol !== 'undefined') {
      assert.isTrue(RA.isNotValidDate(Symbol));
    }

    assert.isTrue(RA.isNotValidDate(null));
    assert.isTrue(RA.isNotValidDate(undefined));
  });
});

describe('isInvalidDate', function() {
  it('tests an alias', function() {
    assert.strictEqual(RA.isNotValidDate, RA.isInvalidDate);
  });
});
