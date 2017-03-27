import RA from '../src/index';
import eq from './shared/eq';
import element from './shared/element';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

class Bar {
  constructor() {
    this.prop = 'value';
  }
}

describe('isNotPlainObject', function() {
  it('tests a value for POJO', function() {
    eq(RA.isNotPlainObject({}), false);
    eq(RA.isNotPlainObject({ prop: 'value' }), false);
    eq(RA.isNotPlainObject({ constructor: Bar }), false);
    eq(RA.isNotPlainObject(new Bar()), true);
    eq(RA.isNotPlainObject(['a', 'b', 'c']), true);
  });

  it('tests a value with prototype of null', function() {
    eq(RA.isNotPlainObject(Object.create(null)), false);

    const object = Object.create(null);
    object.constructor = Object.prototype.constructor;

    eq(RA.isNotPlainObject(object), false);
  });

  it('tests a value with `valueOf` property', function() {
    eq(RA.isNotPlainObject({ valueOf: 1 }), false);
  });

  it('test a value with custom prototype', function() {
    eq(RA.isNotPlainObject(Object.create({ a: 3 })), false);
  });

  it('test a value that is DOM element', function() {
    if (element) {
      eq(RA.isNotPlainObject(element), true);
    }
  });

  it('test a value for non-objects', function() {
    eq(RA.isNotPlainObject(args), true);
    eq(RA.isNotPlainObject(Error), true);
    eq(RA.isNotPlainObject(Math), true);
    eq(RA.isNotPlainObject(true), true);
    eq(RA.isNotPlainObject('abc'), true);
  });

  it('test a value for Symbol', function() {
    if (Symbol) {
      eq(RA.isNotPlainObject(Symbol.for('symbol')), true);
    }
  });
});
