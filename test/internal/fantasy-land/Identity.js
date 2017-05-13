import sinon from 'sinon';
import { add, identity } from 'ramda';

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

    });

    it('tets map for returning a value of the same Functor', function() {
      const a = Identity.of(1);
      const b = a.map(identity);

      eq(a instanceof Identity, true);
      eq(b instanceof Identity, true);
    });
  });
});
