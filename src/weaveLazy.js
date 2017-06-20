import { curryN } from 'ramda';

/**
 * Weaves a configuration into function returning the runnable monad like `Reader` or `Free`.
 * This allows us to pre-bind the configuration in advance and use the weaved function
 * without need to explicitly pass the configuration on every call.
 *
 * @func weaveLazy
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.10.0|v1.10.0}
 * @category Function
 * @sig (*... -> *) -> (* -> *) -> (*... -> *)
 * @param {Function} fn The function to weave
 * @param {Function} configAccessor The function that returns the configuration object
 * @return {Function} Auto-curried weaved function
 * @example
 *
 * const { Reader: reader } = require('monet');
 *
 * const log = value => reader(
 *   config => config.log(value)
 * );
 *
 * const consoleAccessor = R.always(console);
 *
 * // no weaving
 * log('test').run(console); //=> prints 'test'
 *
 * // weaving
 * const wlog = RA.weaveLazy(log, consoleAccessor);
 * wlog('test'); //=> prints 'test'
 */
const weaveLazy = curryN(2, (fn, configAccessor) =>
  curryN(fn.length, (...args) => fn(...args).run(configAccessor()))
);

export default weaveLazy;
