import liftFN from './liftFN';

/**
 * "lifts" a function of arity > 1 so that it may "map over" objects that satisfy
 * the Apply spec of algebraic structures. This function is not compatible
 * with {@link https://github.com/fantasyland/fantasy-land#apply|FantasyLand Apply spec}.
 *
 * Lifting is specific for {@link https://github.com/scalaz/scalaz|scalaz} and {@link http://www.functionaljava.org/|functional java} implementations.
 * One of the mainstream libraries that uses this Apply spec is {@link https://cwmyers.github.io/monet.js/|monet.js}.
 * This function acts as interop for ramda and monet.js.
 *
 * More info {@link https://github.com/fantasyland/fantasy-land/issues/50|here}.
 *
 * @func liftF
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.2.0|v1.2.0}
 * @category Function
 * @sig Apply a => (a... -> a) -> (a... -> a)
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function
 * @see {@link RA.liftFN|liftFN}
 * @example
 *
 * const { Maybe } = require('monet');
 *
 * const add3 = (a, b, c) => a + b + c;
 * const madd3 = RA.liftF(add3);
 *
 * madd3(Maybe.Some(10), Maybe.Some(15), Maybe.Some(17)); //=> Maybe.Some(42)
 * madd3(Maybe.Some(10), Maybe.Nothing(), Maybe.Some(17)); //=> Maybe.Nothing()
 */
const liftF = fn => liftFN(fn.length, fn);

export default liftF;
