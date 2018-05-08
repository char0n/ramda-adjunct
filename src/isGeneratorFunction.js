import isNotNull from './isNotNull';

let GeneratorFunction = null;
try {
  GeneratorFunction = new Function('return function* () {}')().constructor; // eslint-disable-line no-new-func
} catch (e) {} // eslint-disable-line no-empty

/* eslint-disable max-len */
/**
 * Checks if input value is `Generator Function`.
 *
 * @func isGeneratorFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isAsyncFunction}, {@link RA.isNotGeneratorFunction|isNotGeneratorFunction}
 * @example
 *
 * RA.isGeneratorFunction(function* test() { }); //=> true
 * RA.isGeneratorFunction(null); //=> false
 * RA.isGeneratorFunction(function test() { }); //=> false
 * RA.isGeneratorFunction(() => {}); //=> false
 */
/* eslint-enable max-len */
const isGeneratorFunction = val => {
  const toStringCheck =
    Object.prototype.toString.call(val) === '[object GeneratorFunction]';
  const legacyConstructorCheck =
    isNotNull(GeneratorFunction) && val instanceof GeneratorFunction;

  return toStringCheck || legacyConstructorCheck;
};

export default isGeneratorFunction;
