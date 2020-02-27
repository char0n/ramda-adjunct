import { curry, compose, complement, both } from 'ramda';

/* eslint-disable max-len */
/**
 * A function which calls the two provided functions and returns the complement of `&&`ing the
 * results.
 * It returns true if the first function is false-y and the complement of the second function
 * otherwise. Note that this is short-circuited, meaning that the second function will not be
 * invoked if the first returns a false-y value. In short it will return true unless both predicates
 * return true.
 *
 * In addition to functions, `RA.notBoth` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func notBoth
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.3.0|v2.3.0}
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} Returns a function that applies its arguments to `f` and `g` and returns the complement of `&&`ing their outputs together.
 * @see {@link http://ramdajs.com/docs/#both|R.both}
 * @example
 *
 * const gt10 = R.gt(R.__, 10)
 * const even = (x) => x % 2 === 0;
 * const f = RA.notBoth(gt10, even);
 *
 * f(12); //=> false
 * f(8); //=> true
 * f(11); //=> true
 * f(9); //=> true
 */
/* eslint-enable max-len */
const notBoth = curry(compose(complement, both));

export default notBoth;
