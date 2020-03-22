import { curry, map, tap } from 'ramda';

/* eslint-disable max-len */
/**
 * Runs the given list of functions in order with the supplied object, then returns the object.
 * Also known as the normal order sequencing combinator.
 *
 * Acts as a transducer if a transformer is given as second parameter.
 *
 * @func seq
 * @aliases sequencing
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.3.0|v2.3.0}
 * @category Function
 * @sig [(a -> *), (a -> *), ...] -> a -> a
 * @param {Array} fns The list of functions to call in order with `x` whose return values will be thrown away
 * @param {*} x
 * @return {*} `x`
 * @see {@link http://ramdajs.com/docs/#tap|R.tap}, {@link http://www.cs.rpi.edu/academics/courses/spring11/proglang/handouts/lambda-calculus-chapter.pdf|sequencing combinator explained}
 * @example
 *
 * RA.seq([console.info, console.log])('foo'); //=> prints 'foo' via info then log
 *
 * // usage in composition
 * R.pipe(
 *   R.concat('prefix '),
 *   RA.seq([
 *     console.info, //=> prints 'prefix test'
 *     console.log //=> prints 'prefix test'
 *   ]),
 *   R.toUpper
 * )('test'); //=> 'PREFIX TEST'
 */
/* eslint-enable max-len */

const seq = curry((fns, x) => tap((tx) => map((fn) => fn(tx))(fns))(x));

export default seq;
