import { pipe, type, identical, curryN } from 'ramda';

/**
 * Checks if input value is `Async Function`.
 *
 * @func isAsyncFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isNotAsyncFunction|isNotAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isAsyncFunction(async function test() { }); //=> true
 * RA.isAsyncFunction(null); //=> false
 * RA.isAsyncFunction(function test() { }); //=> false
 * RA.isAsyncFunction(() => {}); //=> false
 */
const isAsyncFunction = curryN(1, pipe(type, identical('AsyncFunction')));

export default isAsyncFunction;
