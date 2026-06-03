import { both, hasIn } from 'ramda';

import isObj from './isObj.js';
import isSymbol from './isSymbol.js';
import neither from './neither.js';

/**
 * Checks if a value can be safely coerced to a number without throwing a `TypeError`.
 * Returns `false` for `Symbol` values and for objects lacking both `toString` and `valueOf`
 * in their prototype chain (e.g. `Object.create(null)`). Returns `true` for all other values,
 * including strings, numbers, booleans, `null`, `undefined`, and standard objects.
 *
 * @func isCoercible
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/6.1.0|v6.1.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.toNumber|toNumber}
 * @example
 *
 * RA.isCoercible(42); //=> true
 * RA.isCoercible('42'); //=> true
 * RA.isCoercible('hello'); //=> true
 * RA.isCoercible(null); //=> true
 * RA.isCoercible({}); //=> true
 * RA.isCoercible(Symbol('foo')); //=> false
 * RA.isCoercible(Object.create(null)); //=> false
 */
const isCoercible = neither(
  isSymbol,
  both(isObj, neither(hasIn('toString'), hasIn('valueOf')))
);

export default isCoercible;
