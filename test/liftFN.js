import * as R from 'ramda';
import { assert } from 'chai';
import { Maybe } from 'monet';

import * as RA from '../src/index';
import eq from './shared/eq';
import Identity from '../src/fantasy-land/Identity';

const addN = (...args) => R.sum(args);
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
    assert.throws(
      addN3.bind(
        null,
        Maybe.Some(1),
        Maybe.Some(1),
        Maybe.Some(1),
        Maybe.Some(1)
      ),
      TypeError
    );
  });

  it('can lift functions of any arity', function() {
    eq(addN3(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)), Maybe.Some(3));
    eq(
      addN4(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)),
      Maybe.Some(4)
    );
    eq(
      addN5(
        Maybe.Some(1),
        Maybe.Some(1),
        Maybe.Some(1),
        Maybe.Some(1),
        Maybe.Some(1)
      ),
      Maybe.Some(5)
    );
  });

  it('retain order of arguments', function() {
    eq(
      RA.liftFN(3, add3)(Maybe.Some('a'), Maybe.Some('b'), Maybe.Some('c')),
      Maybe.Some('abc')
    );
    eq(
      RA.liftFN(3, add3)(Identity.of('a'), Identity.of('b'), Identity.of('c')),
      Identity.of('abc')
    );
  });

  it('is curried', function() {
    const f4 = RA.liftFN(4);
    eq(typeof f4, 'function');
    eq(
      f4(addN)(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)),
      Maybe.Some(4)
    );
  });
});
