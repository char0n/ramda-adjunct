import { Maybe } from 'monet';
import { add, reduce, curry } from 'ramda';

import RA from '../src/index';
import eq from './shared/eq';


const addN = (...args) => reduce(add, 0, args);
const add3 = curry((a, b, c) => a + b + c);

describe('liftFN', function() {
  const addN3 = RA.liftFN(3, addN);
  const addN4 = RA.liftFN(4, addN);
  const addN5 = RA.liftFN(5, addN);

  it('returns a function', function() {
    eq(typeof RA.liftFN(3, add3), 'function');
  });

  it('limits a variadic function to the specified arity', function() {
    eq(addN3(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)), Maybe.Some(3));
  });

  it('can lift functions of any arity', function() {
    eq(addN3(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)), Maybe.Some(3));
    eq(addN4(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)), Maybe.Some(4));
    eq(
      addN5(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)),
      Maybe.Some(5)
    );
  });

  it('is curried', function() {
    const f4 = RA.liftFN(4);
    eq(typeof f4, 'function');
    eq(f4(addN)(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)), Maybe.Some(4));
  });
});
