import { curryN } from 'ramda';

/**
 * Weaves a configuration into function returning the runnable monad like `Reader` or `Free`.
 * This allows us to pre-bind the configuration in advance and use the weaved function
 * without need to explicitly pass the configuration on every call.
 *
 * @func weave
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.7.0|v1.7.0}
 * @category Function
 * @sig (*... -> *) -> * -> (*... -> *)
 * @param {Function} fn The function to weave
 * @param {*} config The configuration to weave into fn
 * @return {Function} Auto-curried weaved function
 * @example
 *
 * const { Reader: reader } = require('monet');
 *
 * const log = value => reader(
 *   config => config.log(value)
 * );
 *
 * // no weaving
 * log('test').run(console); //=> prints 'test'
 *
 * // weaving
 * const wlog = RA.weave(log, console);
 * wlog('test'); //=> prints 'test'
 */
const weave = curryN(2, (fn, config) =>
  curryN(fn.length, (...args) => fn(...args).run(config))
);

export default weave;
