import { isEmpty, anyPass, test } from 'ramda';

import isUndefined from './isUndefined';
import isFalse from './isFalse';
/**
 * Checks if input value is `Blank`.
 *
 * @func isBlank
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/3.1.0|v3.1.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link https://blog.appsignal.com/2018/09/11/differences-between-nil-empty-blank-and-present.html|Differences Between #nil?, #empty?, #blank?, and #present?}
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
const isBlank = anyPass([isFalse, isUndefined, isEmpty, test(/^\s+$/gm)]);

export default isBlank;
