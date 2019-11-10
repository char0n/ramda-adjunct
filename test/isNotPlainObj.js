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

describe('isNotPlainObj', function() {
  it('tests a value for POJO', function() {
    assert.isFalse(RA.isNotPlainObj({}));
    assert.isFalse(RA.isNotPlainObj({ prop: 'value' }));
    assert.isFalse(RA.isNotPlainObj({ constructor: Bar }));
    assert.isTrue(RA.isNotPlainObj(new Bar()));
    assert.isTrue(RA.isNotPlainObj(['a', 'b', 'c']));
  });

  it('tests a value with prototype of null', function() {
    assert.isFalse(RA.isNotPlainObj(Object.create(null)));

    const object = Object.create(null);
    object.constructor = Object.prototype.constructor;

    assert.isFalse(RA.isNotPlainObj(object));
  });

  it('tests a value with `valueOf` property', function() {
    assert.isFalse(RA.isNotPlainObj({ valueOf: 1 }));
  });

  it('test a value with custom prototype', function() {
    assert.isFalse(RA.isNotPlainObj(Object.create({ a: 3 })));
  });

  it('test a value that is DOM element', function() {
    if (element) {
      assert.isTrue(RA.isNotPlainObj(element));
    }
  });

  it('test a value for non-objects', function() {
    assert.isTrue(RA.isNotPlainObj(args));
    assert.isTrue(RA.isNotPlainObj(Error));
    assert.isTrue(RA.isNotPlainObj(Math));
    assert.isTrue(RA.isNotPlainObj(true));
    assert.isTrue(RA.isNotPlainObj('abc'));
  });

  it('test a value for Symbol', function() {
    if (Symbol) {
      assert.isTrue(RA.isNotPlainObj(Symbol.for('symbol')));
    }
  });
});

describe('isNotPlainObject', function() {
  it('tests an alias', function() {
    assert.strictEqual(RA.isNotPlainObj, RA.isNotPlainObject);
  });
});
