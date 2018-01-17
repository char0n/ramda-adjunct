import * as RA from '../src/index';
import eq from './shared/eq';
import element from './shared/element';
import args from './shared/arguments';
import Symbol from './shared/Symbol';


class Bar {
  constructor() {
    this.prop = 'value';
  }
}

describe('isPlainObj', function () {
  it('tests a value for POJO', function () {
    eq(RA.isPlainObj({}), true);
    eq(RA.isPlainObj({ prop: 'value' }), true);
    eq(RA.isPlainObj({ constructor: Bar }), true);
    eq(RA.isPlainObj(new Bar()), false);
    eq(RA.isPlainObj(['a', 'b', 'c']), false);
  });

  it('tests a value with prototype of null', function () {
    eq(RA.isPlainObj(Object.create(null)), true);

    const object = Object.create(null);
    object.constructor = Object.prototype.constructor;

    eq(RA.isPlainObj(object), true);
  });

  it('tests a value with `valueOf` property', function () {
    eq(RA.isPlainObj({ valueOf: 1 }), true);
  });

  it('test a value with custom prototype', function () {
    eq(RA.isPlainObj(Object.create({ a: 3 })), true);
  });

  it('test a value that is DOM element', function () {
    if (element) {
      eq(RA.isPlainObj(element), false);
    }
  });

  it('test a value for non-objects', function () {
    eq(RA.isPlainObj(args), false);
    eq(RA.isPlainObj(Error), false);
    eq(RA.isPlainObj(Math), false);
    eq(RA.isPlainObj(true), false);
    eq(RA.isPlainObj('abc'), false);
  });

  it('test a value for Symbol', function () {
    if (Symbol) {
      eq(RA.isPlainObj(Symbol.for('symbol')), false);
    }
  });
});

describe('isPlainObject', function () {
  it('tests an alias', function () {
    eq(RA.isPlainObj === RA.isPlainObject, true);
  });
});

