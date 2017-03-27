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

describe('isPlainObject', function() {
  it('tests a value for POJO', function() {
    eq(RA.isPlainObject({}), true);
    eq(RA.isPlainObject({ prop: 'value' }), true);
    eq(RA.isPlainObject({ constructor: Bar }), true);
    eq(RA.isPlainObject(new Bar()), false);
    eq(RA.isPlainObject(['a', 'b', 'c']), false);
  });

  it('tests a value with prototype of null', function() {
    eq(RA.isPlainObject(Object.create(null)), true);

    const object = Object.create(null);
    object.constructor = Object.prototype.constructor;

    eq(RA.isPlainObject(object), true);
  });

  it('tests a value with `valueOf` property', function() {
    eq(RA.isPlainObject({ valueOf: 1 }), true);
  });

  it('test a value with custom prototype', function() {
    eq(RA.isPlainObject(Object.create({ a: 3 })), true);
  });

  it('test a value that is DOM element', function() {
    if (element) {
      eq(RA.isPlainObject(element), false);
    }
  });

  it('test a value for non-objects', function() {
    eq(RA.isPlainObject(args), false);
    eq(RA.isPlainObject(Error), false);
    eq(RA.isPlainObject(Math), false);
    eq(RA.isPlainObject(true), false);
    eq(RA.isPlainObject('abc'), false);
  });

  it('test a value for Symbol', function() {
    if (Symbol) {
      eq(RA.isPlainObject(Symbol.for('symbol')), false);
    }
  });
});
