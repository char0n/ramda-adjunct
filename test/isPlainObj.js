import { assert } from 'chai';

import * as RA from '../src';
import element from './shared/element';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

class Bar {
  constructor() {
    this.prop = 'value';
  }
}

describe('isPlainObj', function() {
  it('tests a value for POJO', function() {
    assert.isTrue(RA.isPlainObj({}));
    assert.isTrue(RA.isPlainObj({ prop: 'value' }));
    assert.isTrue(RA.isPlainObj({ constructor: Bar }));
    assert.isFalse(RA.isPlainObj(new Bar()));
    assert.isFalse(RA.isPlainObj(['a', 'b', 'c']));
  });

  it('tests a value with prototype of null', function() {
    assert.isTrue(RA.isPlainObj(Object.create(null)));

    const object = Object.create(null);
    object.constructor = Object.prototype.constructor;

    assert.isTrue(RA.isPlainObj(object));
  });

  it('tests a value with `valueOf` property', function() {
    assert.isTrue(RA.isPlainObj({ valueOf: 1 }));
  });

  it('test a value with custom prototype', function() {
    assert.isTrue(RA.isPlainObj(Object.create({ a: 3 })));
  });

  it('test a value that is DOM element', function() {
    if (element) {
      assert.isFalse(RA.isPlainObj(element));
    }
  });

  it('test a value for non-objects', function() {
    assert.isFalse(RA.isPlainObj(args));
    assert.isFalse(RA.isPlainObj(Error));
    assert.isFalse(RA.isPlainObj(Math));
    assert.isFalse(RA.isPlainObj(true));
    assert.isFalse(RA.isPlainObj('abc'));
  });

  it('test a value for Symbol', function() {
    if (Symbol !== 'undefined') {
      assert.isFalse(RA.isPlainObj(Symbol.for('symbol')));
    }
  });
});

describe('isPlainObject', function() {
  it('tests an alias', function() {
    assert.strictEqual(RA.isPlainObj, RA.isPlainObject);
  });
});
