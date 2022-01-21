import { isEmpty, isNil, anyPass, test } from 'ramda';

import isFalse from './isFalse';
/**
 * Returns `true` if the given value is its type's empty value, `false`, `undefined`
 * as well as strings containing only whitespace characters; `false` otherwise.
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
 * RA.isBlank({}); //=> true
 * RA.isBlank(null); //=> true
 * RA.isBlank(undefined); //=> true
 * RA.isBlank([]); //=> true
 * RA.isBlank(false); //=> true
 * RA.isBlank('value'); //=> false
 * RA.isBlank({ foo: 'foo' }); //=> false
 * RA.isBlank([1, 2, 3]); //=> false
 * RA.isBlank(true); //=> false
 */
const isBlank = anyPass([isFalse, isNil, isEmpty, test(/^\s+$/gm)]);

export default isBlank;
