import { curryN } from 'ramda';

import renameKeys from './renameKeys';

/**
 * Creates a new object with the own properties of the provided object, and the
 * keys copied according to the keysMap object as `{oldKey: newKey}`.
 * When no key from the keysMap is found, then a shallow clone of an object is returned.
 *
 * Keep in mind that in the case of keys conflict is behaviour undefined and
 * the result may vary between various JS engines!
 *
 * @func copyKeys
 * @memberOf RA
 * @category Object
 * @sig {a: b} -> {a: *} -> {b: *}
 * @param {!Object} keysMap
 * @param {!Object} obj
 * @return {!Object} New object with copied keys
 * @see {@link RA.renameKeys|renameKeys}
 * @example
 *
 * copyKeys({ a: 'b' }, { a: true }); //=> { a: true, b: true }
 * copyKeys({ a: 'b' }, { a: true, b: false }); //=> { a: true, b: true }
 */
const copyKeys = curryN(2, (keysMap, obj) => ({
  ...obj,
  ...renameKeys(keysMap, obj),
}));

export default copyKeys;
