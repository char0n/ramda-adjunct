import { Either } from 'monet';
import * as R from 'ramda';
import { assert } from 'chai';

import * as RA from '../src';
import eq from './shared/eq';

describe('cata', function() {
  const eitherR = Either.Right(1);
  const eitherL = Either.Left(2);

  it('should test for Either catamorphism', function() {
    eq(RA.cata(R.identity, R.identity, eitherR), 1);
    eq(RA.cata(R.identity, R.identity, eitherL), 2);
  });

  it('should curry', function() {
    eq(RA.cata(R.identity)(R.identity)(eitherR), 1);
    eq(RA.cata(R.identity, R.identity)(eitherL), 2);
  });

  it('should test Left for catamorphism without function', function() {
    assert.throws(RA.cata.bind(null, null, R.identity, eitherL), TypeError);
    eq(RA.cata(R.identity, null, eitherL), 2);
  });

  it('should test Right for catamorphism without function', function() {
    assert.throws(RA.cata.bind(null, R.identity, null, eitherR), TypeError);
    eq(RA.cata(null, R.identity, eitherR), 1);
  });

  it('should call either method on catamorphic object', function() {
    const eitherRWithEither = Either.Right(1);
    const eitherLWithEither = Either.Left(2);

    eitherRWithEither.either = eitherRWithEither.cata;
    eitherLWithEither.either = eitherLWithEither.cata;

    eq(RA.cata(R.identity, R.identity, eitherRWithEither), 1);
    eq(RA.cata(R.identity, R.identity, eitherLWithEither), 2);
  });

  it('should throw Error on monad without catamorphic behavior', function() {
    assert.throws(RA.cata.bind(null, R.identity, R.identity, {}), TypeError);
    assert.throws(RA.cata.bind(null, R.identity, R.identity, null), TypeError);
    assert.throws(
      RA.cata.bind(null, R.identity, R.identity, undefined),
      TypeError
    );
  });
});
