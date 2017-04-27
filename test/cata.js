import { Either } from 'monet';
import { identity } from 'ramda';
import chai from 'chai';

import RA from '../src/index';
import eq from './shared/eq';

describe('cata', function() {
  const eitherR = Either.Right(1);
  const eitherL = Either.Left(2);

  it('tests an Either for catamorphism', function() {
    eq(RA.cata(identity, identity, eitherR), 1);
    eq(RA.cata(identity, identity, eitherL), 2);
  });

  it('test currying', function() {
    eq(RA.cata(identity)(identity)(eitherR), 1);
    eq(RA.cata(identity, identity)(eitherL), 2);
  });

  it('tests left for catamorphism without functions', function() {
    chai.assert.throws(RA.cata.bind(null, null, identity, eitherL), TypeError);
    eq(RA.cata(identity, null, eitherL), 2);
  });

  it('tests right for catamorphism without functions', function() {
    chai.assert.throws(RA.cata.bind(null, identity, null, eitherR), TypeError);
    eq(RA.cata(null, identity, eitherR), 1);
  });
});
