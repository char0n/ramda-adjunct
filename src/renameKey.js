import { always, curry, equals, when } from 'ramda';

import renameKeysWith from './renameKeysWith';

/**
 * Creates a new object with the own properties of the provided object, but a
 * single key is renamed according to the currentKey as `'oldKey'` and newKey as `'newKey'`.
 * When some key is not found in the currentKey, then it's passed as-is.
 *
 * Keep in mind that in the case of keys conflict is behaviour undefined and
 * the result may vary between various JS engines!
 *
 * @func renameKey
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.5.0|v1.5.0}
 * @category Object
 * @sig [String a] -> [String b] -> {[String a]: *} -> {[String b]: *}
 * @param {!string} currentKey
 * @param {!string} newKey
 * @param {!Object} obj
 * @return {!Object} New object with renamed key
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#rename-key-of-an-object|Ramda Cookbook}, {@link RA.renameKey|renameKey}
 * @example
 *
 * const input = { firstName: 'Elisia', age: 22, type: 'human' };
 *
 * RA.renameKey('firstName', 'name')(input);
 * //=> { name: 'Elisia', age: 22, type: 'human' }
 */
const renameKey = curry((currentKey, newKey, obj) => {
  const replaceCurrentKeyWithNewKey = when(equals(currentKey), always(newKey));

  return renameKeysWith(replaceCurrentKeyWithNewKey, obj);
});

export default renameKey;
