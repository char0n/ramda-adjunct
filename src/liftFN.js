import { curry, last, slice, reverse, reduce, pipe, ap, curryN, map, flip } from 'ramda';

/**
 * "lifts" a function to be the specified arity, so that it may "map over" objects that satisfy
 * the Apply spec of algebraic structures. This function is not compatible
 * with {@link https://github.com/fantasyland/fantasy-land#apply|FantasyLand Apply spec}.
 *
 * Lifting is specific for {@link https://github.com/scalaz/scalaz|scalaz} and {@link http://www.functionaljava.org/|functional java} implementations.
 * One of the mainstream libraries that uses this Apply spec is {@link https://cwmyers.github.io/monet.js/|monet.js}.
 * This function acts as interop for ramda and monet.js.
 *
 * More info {@link https://github.com/fantasyland/fantasy-land/issues/50|here}.
 *
 * @func liftFN
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.2.0|v1.2.0}
 * @category Function
 * @sig Apply a => Number -> (a... -> a) -> (a... -> a)
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function
 * @see {@link http://ramdajs.com/docs/#lift|lift}, {@link http://ramdajs.com/docs/#ap|ap}
 * @example
 *
 * const { Maybe } = require('monet');
 *
 * const add3 = (a, b, c) => a + b + c;
 * const madd3 = RA.liftFN(3, add3);
 *
 * madd3(Maybe.Some(10), Maybe.Some(15), Maybe.Some(17)); //=> Maybe.Some(42)
 * madd3(Maybe.Some(10), Maybe.Nothing(), Maybe.Some(17)); //=> Maybe.Nothing()
 */
const liftFN = curry((arity, fn) => {
  const lifted = curryN(arity, fn);
  return curryN(arity, (...args) => {
    const accumulator = map(lifted, last(args));
    const apps = pipe(slice(0, arity - 1), reverse)(args);
    return reduce(flip(ap), accumulator, apps);
  });
});

export default liftFN;
