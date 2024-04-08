import monet from 'monet';
import folktale from 'folktale';
import ramdaFantasy from 'ramda-fantasy/dist/ramda-fantasy.js';
import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src/index.js';

describe('cata', function () {
  context('monet support', function () {
    specify('should support Either type', function () {
      const eitherR = monet.Either.Right(1);
      const eitherL = monet.Either.Left(2);

      assert.strictEqual(RA.cata(null, R.identity, eitherR), 1);
      assert.strictEqual(RA.cata(R.identity, null, eitherL), 2);
    });

    specify('should support Maybe type', function () {
      const maybeR = monet.Maybe.Just(1);
      const maybeL = monet.Maybe.Nothing();

      assert.strictEqual(RA.cata(null, R.identity, maybeR), 1);
      assert.isUndefined(RA.cata((v) => v, null, maybeL));
    });

    specify('should support Validation type', function () {
      const validationR = monet.Validation.Success(1);
      const validationL = monet.Validation.Fail(2);

      assert.strictEqual(RA.cata(null, R.identity, validationR), 1);
      assert.strictEqual(RA.cata(R.identity, null, validationL), 2);
    });
  });

  context('folktale support', function () {
    specify('should support Maybe type', function () {
      const maybeR = folktale.maybe.Just(1);
      const maybeL = folktale.maybe.Nothing();

      assert.strictEqual(RA.cata(null, R.identity, maybeR), 1);
      assert.isUndefined(RA.cata((v) => v, null, maybeL));
    });

    specify('should support Result type', function () {
      const resultR = folktale.result.Ok(1);
      const resultL = folktale.result.Error(2);

      assert.strictEqual(RA.cata(null, R.identity, resultR), 1);
      assert.strictEqual(
        RA.cata((v) => v, null, resultL),
        2
      );
    });

    specify('should support Validation type', function () {
      const validationR = folktale.validation.Success(1);
      const validationL = folktale.validation.Failure(2);

      assert.strictEqual(RA.cata(null, R.identity, validationR), 1);
      assert.strictEqual(
        RA.cata((v) => v, null, validationL),
        2
      );
    });
  });

  context('ramda-fantasy support', function () {
    specify('should support Either type', function () {
      const eitherR = ramdaFantasy.Either.Right(1);
      const eitherL = ramdaFantasy.Either.Left(2);

      assert.strictEqual(RA.cata(null, R.identity, eitherR), 1);
      assert.strictEqual(RA.cata(R.identity, null, eitherL), 2);
    });

    specify('should support Maybe type', function () {
      const maybeR = ramdaFantasy.Maybe.Just(1);
      const maybeL = ramdaFantasy.Maybe.Nothing();

      assert.strictEqual(RA.cata(null, R.identity, maybeR), 1);
      assert.isUndefined(RA.cata((v) => v, null, maybeL));
    });
  });

  context('given catamorphism without right function', function () {
    specify('should return value from Left', function () {
      const eitherL = monet.Either.Left(2);

      assert.throws(RA.cata.bind(null, null, R.identity, eitherL), TypeError);
      assert.strictEqual(RA.cata(R.identity, null, eitherL), 2);
    });
  });

  context('given catamorphism without left function', function () {
    specify('should return value from Right', function () {
      const eitherR = monet.Either.Right(1);

      assert.throws(RA.cata.bind(null, R.identity, null, eitherR), TypeError);
      assert.strictEqual(RA.cata(null, R.identity, eitherR), 1);
    });
  });

  context('given monad without catamorphic behavior', function () {
    it('should throw Error', function () {
      assert.throws(RA.cata.bind(null, R.identity, R.identity, {}), TypeError);
      assert.throws(
        RA.cata.bind(null, R.identity, R.identity, null),
        TypeError
      );
      assert.throws(
        RA.cata.bind(null, R.identity, R.identity, undefined),
        TypeError
      );
    });
  });

  it('should curry', function () {
    const eitherR = monet.Either.Right(1);
    const eitherL = monet.Either.Left(2);

    assert.strictEqual(RA.cata(R.identity)(R.identity)(eitherR), 1);
    assert.strictEqual(RA.cata(R.identity, R.identity)(eitherL), 2);
  });
});
