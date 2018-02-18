import { complement, identity, pickBy, useWith } from 'ramda';

/* eslint-disable max-len */
/**
 * Returns a partial copy of an object containing only the keys
 * that don't satisfy the supplied predicate.
 *
 * @func omitBy
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category Object
 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
 * @param {!Function} pred A predicate to determine whether or not a key should be included on the output object
 * @param {!Object} obj The object to copy from
 * @return {!Object} A new object only with properties that don't satisfy `pred`
 *
 * @example
 *
 * const isLowerCase = (val, key) => key.toLowerCase() === key;
 * RA.omitBy(isLowerCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
/* eslint-enable max-len */
const omitBy = useWith(pickBy, [complement, identity]);

export default omitBy;
