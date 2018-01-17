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

describe('isNotPlainObj', function () {
  it('tests a value for POJO', function () {
    eq(RA.isNotPlainObj({}), false);
    eq(RA.isNotPlainObj({ prop: 'value' }), false);
    eq(RA.isNotPlainObj({ constructor: Bar }), false);
    eq(RA.isNotPlainObj(new Bar()), true);
    eq(RA.isNotPlainObj(['a', 'b', 'c']), true);
  });

  it('tests a value with prototype of null', function () {
    eq(RA.isNotPlainObj(Object.create(null)), false);

    const object = Object.create(null);
    object.constructor = Object.prototype.constructor;

    eq(RA.isNotPlainObj(object), false);
  });

  it('tests a value with `valueOf` property', function () {
    eq(RA.isNotPlainObj({ valueOf: 1 }), false);
  });

  it('test a value with custom prototype', function () {
    eq(RA.isNotPlainObj(Object.create({ a: 3 })), false);
  });

  it('test a value that is DOM element', function () {
    if (element) {
      eq(RA.isNotPlainObj(element), true);
    }
  });

  it('test a value for non-objects', function () {
    eq(RA.isNotPlainObj(args), true);
    eq(RA.isNotPlainObj(Error), true);
    eq(RA.isNotPlainObj(Math), true);
    eq(RA.isNotPlainObj(true), true);
    eq(RA.isNotPlainObj('abc'), true);
  });

  it('test a value for Symbol', function () {
    if (Symbol) {
      eq(RA.isNotPlainObj(Symbol.for('symbol')), true);
    }
  });
});

describe('isNotPlainObject', function () {
  it('tests an alias', function () {
    eq(RA.isNotPlainObj === RA.isNotPlainObject, true);
  });
});
