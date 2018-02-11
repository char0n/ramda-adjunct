import { Maybe } from 'monet';

import * as RA from '../src/index';
import eq from './shared/eq';

const add3 = (a, b, c) => a + b + c;
const add4 = (a, b, c, d) => a + b + c + d;
const add5 = (a, b, c, d, e) => a + b + c + d + e;

describe('liftF', function() {
  const addF3 = RA.liftF(add3);
  const addF4 = RA.liftF(add4);
  const addF5 = RA.liftF(add5);

  it('returns a function', function() {
    eq(typeof RA.liftF(add3), 'function');
  });

  it('can lift functions of any arity', function() {
    eq(addF3(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)), Maybe.Some(3));
    eq(addF4(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)), Maybe.Some(4));
    eq(addF5(Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1), Maybe.Some(1)), Maybe.Some(5));
  });
});
