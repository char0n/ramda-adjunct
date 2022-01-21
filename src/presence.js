import * as R from 'ramda';

import { isBlank } from '.';

/**
 * Returns the receiver if it’s present, otherwise returns `null`.
 *
 * @func presence
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/3.2.0|v3.2.0}
 * @category Logic
 * @sig a -> a | null
 * @see {@link http://ramdajs.com/docs/#isEmpty|R.isEmpty}
 * @param {*} val The value to test
 * @return {*}
 * @example
 *
 * RA.presence({ foo: 'foo' }) // => { foo: 'foo' }
 * RA.presence({}) // => null
 * RA.presence(false) // => null
 * RA.presence(true) // => true
 * RA.presence('') // => null
 * RA.presence('  ') // => null
 * RA.presence('\t\n') // => null
 * RA.presence('foo') // => foo
 * RA.presence([]) // => null
 * RA.presence([1, 2, 3]) // => [1, 2, 3]
 * RA.presence(undefined) // => null
 * RA.presence(0) // => 0
 * RA.presence(null) // => null
 */

const presence = R.cond([
  [R.equals(false), R.always(null)],
  [isBlank, R.always(null)],
  [R.isEmpty, R.always(null)],
  [R.isNil, R.always(null)],
  [R.T, R.identity],
]);

export default presence;
