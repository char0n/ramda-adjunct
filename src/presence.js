import * as R from 'ramda';

/**
 * Check if value is empty or undefined then returns null, otherwise, returns itself.
 *
 * @func presence
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.29.0|v2.29.0}
 * @category Object
 * @sig k -> null | k
 * @param {k} val The value to test
 * @return {null | k}
 * @example
 *
 * presence({ foo: 'foo' }) // { foo: 'foo' }
 * presence({}) // null
 * presence(false) // null
 * presence(true) // true
 * presence('') // null
 * presence('foo') // foo
 * presence([]) // null
 * presence([1, 2, 3]) // [1, 2, 3]
 * presence(undefined) // null
 * presence(0) // 0
 * presence(null) // null
 */

const presence = R.cond([
  [R.equals(false), R.always(null)],
  [R.isEmpty, R.always(null)],
  [R.isNil, R.always(null)],
  [R.T, R.identity],
]);

export default presence;
