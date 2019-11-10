import { assert } from 'chai';

import * as RA from '../src';
import Symbol from './shared/Symbol';
import args from './shared/arguments';

describe('isNotString', function() {
  it('tests a value for complement of `String`', function() {
    assert.isFalse(RA.isNotString('abc'));
    assert.isFalse(RA.isNotString(Object('abc')));

    assert.isTrue(RA.isNotString(args));
    assert.isTrue(RA.isNotString([1, 2, 3]));
    assert.isTrue(RA.isNotString(true));
    assert.isTrue(RA.isNotString(new Date()));
    assert.isTrue(RA.isNotString(new Error()));
    assert.isTrue(RA.isNotString(Array.prototype.slice));
    assert.isTrue(RA.isNotString({ 0: 1, length: 1 }));
    assert.isTrue(RA.isNotString(1));
    assert.isTrue(RA.isNotString(/x/));
    assert.isTrue(RA.isNotString(Symbol));
  });
});
