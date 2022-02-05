import { assert } from 'chai';
import sinon from 'sinon';
import * as R from 'ramda';
import show from 'sanctuary-show';
import fl from 'fantasy-land';
import laws from 'fantasy-laws';
import jsv from 'jsverify';

import * as RA from '../../src';

describe('Identity', function () {
  const IdentityArb = (arbitrary) =>
    arbitrary.smap(RA.Identity.of, (i) => i.get(), show);

  describe('Setoid', function () {
    const { reflexivity, symmetry, transitivity } = laws.Setoid;

    it('should satisfy reflexivity law', reflexivity(IdentityArb(jsv.falsy)));

    it(
      'should satisfy symmetry law',
      symmetry(IdentityArb(jsv.bool), IdentityArb(jsv.bool))
    );

    it(
      'should satisfy transitivity law',
      transitivity(
        IdentityArb(jsv.bool),
        IdentityArb(jsv.bool),
        IdentityArb(jsv.bool)
      )
    );

    context('given same values inside same Setoid types', function () {
      specify('should equal', function () {
        const a = RA.Identity.of(1);
        const b = RA.Identity.of(1);

        assert.isTrue(a.equals(b));
      });
    });

    context('given same values inside different Setoid types', function () {
      specify('should not equal', function () {
        const a = RA.Identity.of(1);
        const b = RA.Identity.of(1);

        b['@@type'] = 'unknown-type';

        assert.isFalse(a.equals(b));
      });
    });

    it('should return a boolean', function () {
      const a = RA.Identity.of(1);
      const b = RA.Identity.of(2);

      assert.isTrue(a.equals(a));
      assert.isFalse(a.equals(b));
    });

    it('should be isomorphic', function () {
      const type = RA.Identity.of(1);
      const value = type.get();

      assert.instanceOf(type, RA.Identity);
      assert.strictEqual(value, 1);
    });
  });

  describe('Semigroup', function () {
    const { associativity } = laws.Semigroup(R.equals);

    it(
      'should satisfy associativity law',
      associativity(
        IdentityArb(jsv.string),
        IdentityArb(jsv.string),
        IdentityArb(jsv.string)
      )
    );

    context('given two Semigroups of different value types', function () {
      specify('should trow an error', function () {
        const a = RA.Identity.of({});
        const b = RA.Identity.of([]);

        assert.throws(a.concat.bind(b), TypeError);
      });
    });

    context('given two Semigroups of same value types', function () {
      specify('should return a new Semigroup', function () {
        const a = RA.Identity.of(1);
        const b = RA.Identity.of(2);
        const c = a.concat(b);

        assert.instanceOf(a, RA.Identity);
        assert.instanceOf(b, RA.Identity);
        assert.instanceOf(c, RA.Identity);
      });
    });

    context('given two Semigroups of number value type', function () {
      specify('should add the numbers inside Semigroups', function () {
        const a = RA.Identity.of(1);
        const b = RA.Identity.of(2);
        const c = a.concat(b);

        assert.strictEqual(c.get(), 3);
      });
    });

    context('given two Semigroups of string value type', function () {
      specify('should concatenate the strings inside Semigroups', function () {
        const a = RA.Identity.of('a');
        const b = RA.Identity.of('b');
        const c = a.concat(b);

        assert.strictEqual(c.get(), 'ab');
      });
    });

    context('given two Semigroups of array value type', function () {
      specify('should contacenate the arrays inside Semigroups', function () {
        const a = RA.Identity.of([1]);
        const b = RA.Identity.of([2]);
        const c = a.concat(b);

        assert.sameOrderedMembers(c.get(), [1, 2]);
      });
    });

    context('given two fantasy-land compatible Semigroups', function () {
      specify('should concatenate', function () {
        const arrayA = [1];
        const arrayB = [2];

        arrayA[fl.concat] = arrayA.concat;
        arrayB[fl.concat] = arrayB.concat;

        const a = RA.Identity.of(arrayA);
        const b = RA.Identity.of(arrayB);
        const c = a.concat(b);

        assert.sameOrderedMembers(c.get(), [1, 2]);
      });
    });
  });

  describe('Apply', function () {
    const { composition } = laws.Apply(R.equals);

    it('should support Functor specification', function () {
      const a = RA.Identity.of(1);

      assert.isTrue(RA.isFunction(a[fl.map]));
    });

    it(
      'should satisfy composition law',
      composition(
        IdentityArb(jsv.constant(Math.sqrt)),
        IdentityArb(jsv.constant(Math.abs)),
        IdentityArb(jsv.number)
      )
    );

    it('should apply the Apply of a function on a value', function () {
      const a = RA.Identity.of(1);
      const b = RA.Identity.of(1).map(R.add);

      assert.strictEqual(a.ap(b).get(), 2);
    });

    context('given Apply without a function provided', function () {
      specify('should trow error', function () {
        const a = RA.Identity.of(1);
        const b = RA.Identity.of(1).map(R.identity);

        assert.throws(() => a.ap(b).get(), TypeError);
      });
    });

    it('should apply the Apply with function over the Apply with value', function () {
      const a = RA.Identity.of(NaN);
      const b = RA.Identity.of(1).map(R.add);

      assert.isNaN(a.ap(b).get());
    });

    it('should not check any parts of the return value', function () {
      // TODO(vladimir.gorej@gmail.com): how to tests this one ?
    });
  });

  describe('Applicative', function () {
    const { identity, homomorphism, interchange } = laws.Applicative(
      R.equals,
      RA.Identity
    );

    it('should support Apply specification', function () {
      const a = RA.Identity.of(1);

      assert.isTrue(RA.isFunction(a[fl.ap]));
    });

    it('should satisfy identity law', identity(IdentityArb(jsv.number)));

    it(
      'should satisfy homomorphism law',
      homomorphism(jsv.constant(Math.abs), IdentityArb(jsv.number))
    );

    it(
      'should satisfy interchange law',
      interchange(IdentityArb(jsv.constant(Math.abs)), IdentityArb(jsv.number))
    );

    it('should have unit function on type representative', function () {
      assert.isTrue(RA.isFunction(RA.Identity[fl.of]));
      assert.deepEqual(
        RA.Identity.of(1).constructor[fl.of],
        RA.Identity[fl.of]
      );
    });

    it('should return Applicative of the same type', function () {
      const a = RA.Identity.of(1);

      assert.instanceOf(a, RA.Identity);
    });

    it('should not check any parts of the value supplied to unit function', function () {
      // TODO(vladimir.gorej@gmail.com): how to tests this one ?
    });
  });

  describe('Functor', function () {
    const { identity, composition } = laws.Functor(R.equals);

    it('should satisfy identity law', identity(IdentityArb(jsv.number)));

    it(
      'should satisfy composition law',
      composition(
        IdentityArb(jsv.number),
        jsv.constant(Math.sqrt),
        jsv.constant(Math.abs)
      )
    );

    it('should map value with mapping function', function () {
      const fn = sinon.spy();
      const a = RA.Identity.of(1).map(fn);

      assert.instanceOf(a, RA.Identity);
      assert.isTrue(fn.calledOnce);
      assert.isTrue(fn.calledWith(1));
    });

    context('given mapping function is a not a function', function () {
      specify('should throw error', function () {
        const fn = null;
        const a = RA.Identity.of(1);

        assert.throws(a.map.bind(a, fn), TypeError);
      });
    });

    context('given mapping function is mapped over value', function () {
      it('should contain mapped value', function () {
        const a = RA.Identity.of(1);

        assert.isNull(a.map(RA.stubNull).get());
        assert.isUndefined(a.map(RA.stubUndefined).get());
        assert.strictEqual(a.map(R.always(1)).get(), 1);
        assert.strictEqual(a.map(RA.stubString).get(), '');
      });
    });

    it('should not check any parts mapping function return value', function () {
      const result = {};
      const a = RA.Identity.of(result).map(R.identity);

      // TODO(vladimir.gorej@gmail.com): could not come up with something better
      assert.deepEqual(a.get(), result);
    });

    it('should return a value of the same Functor', function () {
      const a = RA.Identity.of(1);
      const b = a.map(identity);

      assert.instanceOf(a, RA.Identity);
      assert.instanceOf(b, RA.Identity);
    });
  });

  describe('Contravariant', function () {
    const { identity, composition } = laws.Contravariant((a, b) =>
      R.equals(a.get()(1))(b.get()(1))
    );

    it(
      'should satisfy identity law',
      identity(IdentityArb(jsv.constant(Math.sqrt)))
    );

    it(
      'should satisfy composition law',
      composition(
        IdentityArb(jsv.constant(Math.sqrt)),
        jsv.constant(Math.sqrt),
        jsv.constant(Math.abs)
      )
    );

    it('should call mapping function', function () {
      const fn = sinon.spy();
      const a = RA.Identity.of(R.always(1)).contramap(fn);

      a.get()(2);

      assert.instanceOf(a, RA.Identity);
      assert.isTrue(fn.calledOnce);
      assert.isTrue(fn.calledWith(2));
    });

    context('given mapping function is not a function', function () {
      specify('should throw error', function () {
        const fn = null;
        const a = RA.Identity.of(identity);

        assert.throws(() => a.contramap(fn).get()(), TypeError);
      });
    });

    it('should map over any value type', function () {
      const a = RA.Identity.of(R.identity);

      assert.isNull(a.contramap(RA.stubNull).get()());
      assert.isUndefined(a.contramap(RA.stubUndefined).get()());
      assert.strictEqual(a.contramap(R.always(1)).get()(), 1);
      assert.strictEqual(a.contramap(RA.stubString).get()(), '');
    });

    it('should not check any parts of the return value', function () {
      const result = {};
      const a = RA.Identity.of(R.identity).contramap(R.always(result));

      // TODO(vladimir.gorej@gmail.com): could not come up with something better
      assert.deepEqual(a.get()(), result);
    });

    it('should return value of the same Contravariant', function () {
      const a = RA.Identity.of(identity);
      const b = a.contramap(identity);

      assert.instanceOf(a, RA.Identity);
      assert.instanceOf(b, RA.Identity);
    });
  });

  describe('Chain', function () {
    const { associativity } = laws.Chain(R.equals);

    it('should support an Apply specification', function () {
      const a = RA.Identity.of(1);

      assert.isTrue(RA.isFunction(a[fl.ap]));
      assert.isTrue(RA.isFunction(a.constructor[fl.of]));
    });

    it(
      'should satisfy associativity law',
      associativity(
        IdentityArb(jsv.number),
        jsv.constant(RA.Identity.of),
        jsv.constant((n) => RA.Identity.of(Math.sqrt(n)))
      )
    );

    it('should map the mapping function over the value', function () {
      const a = RA.Identity.of(1);
      const fn = (val) => RA.Identity.of(val + 1);

      assert.strictEqual(a.chain(fn).get(), 2);
    });

    context('given mapping function is not a function', function () {
      specify('should throw error', function () {
        const a = RA.Identity.of(1);
        const nonFn = null;

        assert.throws(() => a.chain(nonFn), TypeError);
      });
    });

    context('given mapping function', function () {
      context('and it returns value of the same Chain', function () {
        specify('should return mapped value of the same Chain', function () {
          const a = RA.Identity.of(1);
          const fn = (val) => RA.Identity.of(val + 1);

          assert.instanceOf(a.chain(fn), RA.Identity);
          assert.strictEqual(a.chain(fn).get(), 2);
        });
      });

      context('and it returns value of the different Chain', function () {
        specify('should return original Chain', function () {
          const a = RA.Identity.of(1);
          const fn = (val) => val + 1;

          assert.instanceOf(a.chain(fn), RA.Identity);
          assert.strictEqual(a.chain(fn).get(), 1);
        });
      });
    });
  });

  describe('Monad', function () {
    const { leftIdentity, rightIdentity } = laws.Monad(R.equals, RA.Identity);

    it('should support Applicative specification', function () {
      const a = RA.Identity.of(1);

      assert.isTrue(RA.isFunction(RA.Identity[fl.of]));
      assert.isTrue(RA.isFunction(a.constructor[fl.of]));
    });

    it('should support Chain specification', function () {
      const a = RA.Identity.of(1);

      assert.isTrue(RA.isFunction(a[fl.chain]));
    });

    it(
      'should satisfy left identity law',
      leftIdentity(
        jsv.constant((n) => RA.Identity.of(Math.sqrt(n))),
        jsv.number
      )
    );

    it(
      'should satisfy right identity law',
      rightIdentity(IdentityArb(jsv.number))
    );
  });

  describe('Ord', function () {
    const { totality, antisymmetry, transitivity } = laws.Ord;

    it('should support Setoid specification', function () {
      const a = RA.Identity.of(1);

      assert.isTrue(RA.isFunction(a[fl.equals]));
    });

    it(
      'should satisfy totality law',
      totality(IdentityArb(jsv.number), IdentityArb(jsv.number))
    );

    it(
      'should satisfy antisymmetry law',
      antisymmetry(IdentityArb(jsv.number), IdentityArb(jsv.number))
    );

    it(
      'should satisfy transitivity law',
      transitivity(
        IdentityArb(jsv.number),
        IdentityArb(jsv.number),
        IdentityArb(jsv.number)
      )
    );

    it('should support values of the same Ord', function () {
      const a = RA.Identity.of(1);
      const b = RA.Identity.of(2);

      assert.isTrue(a.lte(b));
    });

    it('should not support values of the different Ord', function () {
      const a = RA.Identity.of(1);
      const b = RA.Identity.of(2);

      b['@@type'] = 'unknown-type';

      assert.isFalse(a.lte(b));
    });

    it('should return a boolean', function () {
      const a = RA.Identity.of(1);
      const b = RA.Identity.of(2);

      assert.isTrue(a.lte(b));
      assert.isFalse(b.lte(a));
    });
  });

  describe('Monoid*', function () {
    it('should support Semigroup specification', function () {
      const i = RA.Identity.of('string').empty();

      assert.isTrue(RA.isFunction(i[fl.concat]));
    });

    it('should satisfy right identity law', function () {
      const a = RA.Identity.of('string');
      const i = a.empty();

      assert.isTrue(R.equals(a.concat(i), a));
    });

    it('should satisfy left identity law', function () {
      const a = RA.Identity.of('string');
      const i = a.empty();

      assert.isTrue(R.equals(i.concat(a), a));
    });

    it('should return value of the same Monoid', function () {
      const a = RA.Identity.of('string');
      const i = a.empty();

      assert.instanceOf(a, RA.Identity);
      assert.instanceOf(i, RA.Identity);
    });

    it('should delegate to `empty` method of the value', function () {
      const Type = {
        empty() {
          return 0;
        },
      };

      const a = RA.Identity.of(Type);
      const i = a.empty();

      assert.isTrue(R.equals(i, RA.Identity.of(0)));
    });
  });
});
