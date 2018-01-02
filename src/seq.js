import { curry, map, tap } from 'ramda';

/**
 * Runs the given list of functions in order with the supplied object, then returns the object.
 * Also known as the normal order sequencing combinator.
 *
 * Acts as a transducer if a transformer is given as second parameter.
 *
 * @func seq
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.3.0|v2.3.0}
 * @category Function
 * @sig [(a -> *), (a -> *), ...] -> a -> a
 * @param {Array} fns The list of functions to call in order with `x` whose return values will be
 *        thrown away
 * @param {*} x
 * @return {*} `x`
 * @see {@link http://ramdajs.com/docs/#tap|tap}
 * @see {@link http://www.cs.rpi.edu/academics/courses/spring11/proglang/handouts/lambda-calculus-chapter.pdf|sequencing combinator detailed}
 * @example
 *
 * RA.seq([console.info, console.log])('foo'); //=> prints 'foo' via info then log
 */

const seq = curry((fns, x) => tap(_ => map(fn => fn(_))(fns))(x));

export default seq;
