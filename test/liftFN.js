import chai from 'chai';
import { Maybe } from 'monet';
import { add, reduce } from 'ramda';

import RA from '../src/index';
import eq from './shared/eq';
import { createAp } from '../src/liftFN';
import Identity from '../src/internal/algebraicStructures/Identity';


const addN = (...args) => reduce(add, 0, args);
const add3 = (a, b, c) => a + b + c;

describe('liftFN', function() {
  const addN3 = RA.liftFN(3, addN);
  const addN4 = RA.liftFN(4, addN);
  const addN5 = RA.liftFN(5, addN);

  it('returns a function', function() {
    eq(typeof RA.liftFN(3, add3), 'function');
  });

  it('limits a variadic function to the specified arity', function() {
    eq(addN3(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)), Maybe.Some(3));
  });

  it('throws error on variadic function is more arguments than arity', function() {
    chai.assert.throws(
      addN3.bind(null, Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)),
      TypeError
    );
  });

  it('can lift functions of any arity', function() {
    eq(addN3(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)), Maybe.Some(3));
    eq(addN4(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)), Maybe.Some(4));
    eq(
      addN5(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)),
      Maybe.Some(5)
    );
  });

  it('retain order of arguments', function() {
    eq(RA.liftFN(3, add3)(Maybe.Some('a'), Maybe.Some('b'), Maybe.Some('c')), Maybe.Some('abc'));
    eq(RA.liftFN(3, add3)(Identity.of('a'), Identity.of('b'), Identity.of('c')), Identity.of('abc'));
  });

  it('is curried', function() {
    const f4 = RA.liftFN(4);
    eq(typeof f4, 'function');
    eq(f4(addN)(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)), Maybe.Some(4));
  });

  it('test old fantasyland spec compatibility', function() {
    const m1 = Identity.of(1);
    const m2 = Identity.of(2).map(add);

    eq(createAp(m1, m2)(m1, m2), Identity.of(3));
  });

  it('test new fantasyland spec compatibility', function() {
    const m1 = Identity.of(1);
    const m2 = Identity.of(2).map(add);
    const ap = createAp(m1, m2);

    eq(ap(m1, m2), Identity.of(3));
  });

  it('test old fantasyland spec compatibility', function() {
    const m1 = Maybe.Some(1);
    const m2 = Maybe.Some(2).map(add);
    const ap = createAp(m1, m2);

    eq(ap(m1, m2), Maybe.Some(3));
  });
});
