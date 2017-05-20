import chai from 'chai';
import sinon from 'sinon';
import { add, identity } from 'ramda';
import fl from 'fantasy-land';

import { isFunction } from '../../../src';
import eq from '../../shared/eq';
import Identity from '../../../src/internal/fantasy-land/Identity';


describe('Identity', function() {
  describe('Setoid', function() {
    it('tests for reflexivity', function() {
      const a = Identity.of(1);

      eq(a.equals(a), true);
    });

    it('tests for symetry', function() {
      const a = Identity.of(1);
      const b = Identity.of(1);

      eq(a.equals(b), b.equals(a));
    });

    it('tests for transitivity', function() {
      const a = Identity.of(1);
      const b = Identity.of(1);
      const c = Identity.of(1);

      eq(a.equals(b), true);
      eq(b.equals(c), true);
      eq(a.equals(c), true);
    });

    it('tests for value of the same Setoid', function() {
      const a = Identity.of(1);
      const b = Identity.of(1);

      eq(a.equals(b), true);
    });

    it('tests for value of different Setoid', function() {
      const a = Identity.of(1);
      const b = Identity.of(1);

      b['@@type'] = 'unknown-type';

      eq(a.equals(b), false);
    });

    it('tests for returning a boolean', function() {
      const a = Identity.of(1);
      const b = Identity.of(2);

      eq(a.equals(a), true);
      eq(a.equals(b), false);
    });

    it('tests isomorphism', function() {
      const type = Identity.of(1);
      const value = type.get();

      eq(type instanceof Identity, true);
      eq(value, 1);
    });
  });

  describe('Semigroup', function() {
    it('tests for associativity', function() {
      const a = Identity.of(1);
      const b = Identity.of(2);
      const c = Identity.of(3);

      eq(a.concat(b).concat(c).get(), 6);
      eq(a.concat(b.concat(c)).get(), 6);
    });

    it('tests for value of different Semigroup', function() {
      const a = Identity.of({});
      const b = Identity.of([]);

      chai.assert.throws(a.concat.bind(b), TypeError);
    });

    it('tests concat for returning a value of the same Setoid', function() {
      const a = Identity.of(1);
      const b = Identity.of(2);
      const c = a.concat(b);

      eq(a instanceof Identity, true);
      eq(b instanceof Identity, true);
      eq(c instanceof Identity, true);
    });

    it('tests concat on number Semigroup', function() {
      const a = Identity.of(1);
      const b = Identity.of(2);
      const c = a.concat(b);

      eq(c.get(), 3);
    });

    it('tests concat on string Semigroup', function() {
      const a = Identity.of('a');
      const b = Identity.of('b');
      const c = a.concat(b);

      eq(c.get(), 'ab');
    });

    it('tests concat on array Semigroup', function() {
      const a = Identity.of([1]);
      const b = Identity.of([2]);
      const c = a.concat(b);

      eq(c.get(), [1, 2]);
    });

    it('test concat of fantas-land compatible Semigroup', function() {
      const arrayA = [1];
      const arrayB = [2];

      arrayA[fl.concat] = arrayA.concat;
      arrayB[fl.concat] = arrayB.concat;

      const a = Identity.of(arrayA);
      const b = Identity.of(arrayB);
      const c = a.concat(b);

      eq(c.get(), [1, 2]);
    });
  });

  describe('Applicative', function() {
    it('tests for an Apply spec', function() {
      const a = Identity.of(1);

      eq(isFunction(a[fl.ap]), true);
    });

    it('tests for of function on type representative', function() {
      eq(isFunction(Identity[fl.of]), true);
    });

    it('tests for of providing value of same Applicative', function() {
      const a = Identity.of(1);

      eq(a instanceof Identity, true);
    });

    it("tests if no parts of of's arguments are being checked", function() {
      // TODO(vladimir.gorej@gmail.com): how to tests this one ?
    });
  });

  describe('Functor', function() {
    it('tests for identity', function() {
      const a = Identity.of(1);
      const b = a.map(identity);

      eq(a.equals(b), true);
    });

    it('tests for composition', function() {
      const add1 = add(1);
      const a = Identity.of(1).map(add1).map(add1);
      const b = Identity.of(1).map(val => add1(add1(val)));

      eq(a.equals(b), true);
    });

    it('tests f for a function type', function() {
      const fn = sinon.spy();
      const a = Identity.of(1).map(fn);

      eq(a instanceof Identity, true);
      eq(fn.calledOnce, true);
      eq(fn.calledWith(1), true);
    });

    it('tests f for non-function type and unspecified behavior', function() {
      const fn = null;
      const a = Identity.of(1);

      chai.assert.throws(a.map.bind(a, fn), TypeError);
    });

    it('tests f for returning any value', function() {
      const stubNull = () => null;
      const stubUndefined = () => undefined;
      const stubNumber = () => 1;
      const stubString = () => 'string';

      const a = Identity.of(1);

      eq(a.map(stubNull).get(), null);
      eq(a.map(stubUndefined).get(), undefined);
      eq(a.map(stubNumber).get(), 1);
      eq(a.map(stubString).get(), 'string');
    });

    it("tests for non parts of f's return value should be checked", function() {
      const result = {};
      const a = Identity.of(result).map(identity);

      // TODO(vladimir.gorej@gmail.com): could not come up with something better
      eq(a.get() === result, true);
      eq(a.get(), result);
    });

    it('tests map for returning a value of the same Functor', function() {
      const a = Identity.of(1);
      const b = a.map(identity);

      eq(a instanceof Identity, true);
      eq(b instanceof Identity, true);
    });
  });
});
