import fantasyLand from 'fantasy-land';
import { curry, head, slice, reduce, ap as apR, curryN, map, add, flip } from 'ramda';


const applicativeTrait = {
  of(value) {
    return { ...this, value };
  },
};
applicativeTrait[fantasyLand.of] = applicativeTrait.of;

const functorTrait = {
  map(fn) {
    return this.of(fn(this.value));
  },
};
functorTrait[fantasyLand.map] = functorTrait.map;

const applyTrait = {
  ap(monadWithApplyOfAFunction) {
    return monadWithApplyOfAFunction.map(fn => fn(this.value));
  },
};
applyTrait[fantasyLand.ap] = applyTrait.ap;

const Monad = { ...applicativeTrait, ...functorTrait, ...applyTrait };
const m1 = Monad.of(1);
const m2 = Monad.of(2).map(add);


export const createAp = (ap1, ap2) => {
  try {
    // new version of `ap` starting from ramda version > 0.23.0
    return ap1.ap(ap2) && apR;
  } catch (e) {
    // old version of `ap` till ramda version <= 0.23.0
    return curryN(2, flip(apR));
  }
};

const ap = createAp(m2, m1);

/**
 * "lifts" a function to be the specified arity, so that it may "map over" objects that satisfy
 * the fantasy land Apply spec of algebraic structures.
 *
 * Lifting is specific for {@link https://github.com/scalaz/scalaz|scalaz} and {@link http://www.functionaljava.org/|functional java} implementations.
 * Old version of fantasy land spec were not compatible with this approach,
 * but as of fantasy land 1.0.0 Apply spec also adopted this approach.
 *
 * This function acts as interop for ramda <= 0.23.0 and {@link https://cwmyers.github.io/monet.js/|monet.js}.
 *
 * More info {@link https://github.com/fantasyland/fantasy-land/issues/50|here}.
 *
 * @func liftFN
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.2.0|v1.2.0}
 * @category Function
 * @sig Apply a => Number -> (a... -> a) -> (a... -> a)
 * @param {Number} arity The arity of the lifter function
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
    const accumulator = map(lifted, head(args));
    const apps = slice(1, Infinity, args);
    return reduce(ap, accumulator, apps);
  });
});

export default liftFN;
