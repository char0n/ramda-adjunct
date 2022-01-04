import * as R from 'ramda';

import * as RA from '.';

/**
 * Checks if input value is `Blank`.
 *
 * @func isBlank
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.36.0|v2.36.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link R.isEmpty|isEmpty}
 * @see {@link R.match|match}
 * @see {@link RA.isString|isString}
 * @see {@link RA.isUndefined|isUndefined}
 * @see {@link RA.isFalse|isFalse}
 * @example
 *
 * RA.isBlank(''); //=> true
 * RA.isBlank('   '); //=> true
 * RA.isBlank('\t\n'); //=> true
 * RA.isBlank('value'); //=> false
 * RA.isBlank({}); //=> true
 * RA.isBlank({ foo: 'foo' }); //=> false
 * RA.isBlank([]); //=> true
 * RA.isBlank([1, 2, 3]); //=> false
 * RA.isBlank(null); //=> false
 * RA.isBlank(undefined); //=> false
 * RA.isBlank(true); //=> false
 * RA.isBlank(false); //=> true
 */
const regExRule = /^\s+|\s+|\\t\\n/g;
const isBlank = (val) =>
  !!(
    R.isEmpty(val) ||
    (RA.isString(val) && R.match(regExRule, val)) ||
    RA.isUndefined(val) ||
    RA.isFalse(val)
  );

export default isBlank;
