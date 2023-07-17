import { curry } from 'ramda';

import renameKeys from './renameKeys';

/**
 * Creates a new object with the own properties of the provided object, but a
 * single key is renamed from `oldKey` to `newKey`.
 *
 * Keep in mind that in the case of keys conflict is behavior undefined and
 * the result may vary between various JS engines!
 *
 * @func renameKey
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/4.1.0|v4.1.0}
 * @category Object
 * @sig (String a, String b) => a -> b ->  {a: *} -> {b: *}
 * @param {!string} oldKey
 * @param {!string} newKey
 * @param {!Object} obj
 * @return {!Object} New object with renamed key
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#rename-key-of-an-object|Ramda Cookbook}, {@link RA.renameKeyWith|renameKeyWith}
 * @example
 *
 * const input = { firstName: 'Elisia', age: 22, type: 'human' };
 *
 * RA.renameKey('firstName', 'name')(input);
 * //=> { name: 'Elisia', age: 22, type: 'human' }
 */
const renameKey = curry((oldKey, newKey, obj) =>
  renameKeys({ [oldKey]: newKey }, obj)
);

export default renameKey;
