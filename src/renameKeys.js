import { curry, reduce, assoc, keys, has } from 'ramda';

/**
 * Creates a new object with the own properties of the provided object, but the
 * keys renamed according to the keysMap object as `{oldKey: newKey}`.
 * When some key is not found in the keysMap, then it's passed as-is.
 *
 * Keep in mind that in the case of keys conflict is behaviour undefined and
 * the result may vary between various JS engines!
 *
 * @func renameKeys
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.5.0|v1.5.0}
 * @category Object
 * @sig {a: b} -> {a: *} -> {b: *}
 * @param {!Object} keysMap
 * @param {!Object} obj
 * @return {!Object} New object with renamed keys
 * @see {@link RA.renameKeysWith|renameKeysWith}
 * @example
 *
 * const input = { firstName: 'Elisia', age: 22, type: 'human' };
 *
 * renameKeys({ firstName: 'name', type: 'kind', foo: 'bar' })(input);
 * //=> { name: 'Elisia', age: 22, kind: 'human' }
 */
const renameKeys = curry((keysMap, obj) =>
  reduce((accumulator, key) => {
    const newKeyName = has(key, keysMap) ? keysMap[key] : key;

    return assoc(newKeyName, obj[key], accumulator);
  }, {}, keys(obj))
);

export default renameKeys;
