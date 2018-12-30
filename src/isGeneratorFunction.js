import curry1 from 'ramda/src/internal/_curry1';
import { type, is, F as stubFalse, either, identical, pipe } from 'ramda';

let GeneratorFunction = null;
let legacyCheck = null;
try {
  GeneratorFunction = new Function('return function* () {}')().constructor; // eslint-disable-line no-new-func
  legacyCheck = is(GeneratorFunction);
} catch (e) {
  legacyCheck = stubFalse;
}

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
const isGeneratorFunction = curry1(
  either(
    pipe(
      type,
      identical('GeneratorFunction')
    ),
    legacyCheck
  )
);

export default isGeneratorFunction;
