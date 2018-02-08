import { addIndex, map } from 'ramda';


/**
 * Like {@link http://ramdajs.com/docs/#map|R.map} but with iterator function that take the current element,
 * the element's key, and the list itself.
 *
 * This function is like {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map|Array.prototype.map}
 *
 * `mapIndexed` implementation is simple : `
 * const mapIndexed = R.addIndex(R.map);
 * `
 * @func mapIndexed
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.5.0|v2.5.0}
 * @category List
 * @sig Functor f => ((a, Number, f a) => b) => f a -> f b
 * @param {Function} fn The iterator function.
 * Receives tree values, the current element, the element's key and the list itself
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see {@link http://ramdajs.com/docs/#addIndex|R.addIndex}, {@link http://ramdajs.com/docs/#map|R.map}.
 * @example const joinArgs = separator => R.compose(R.join(separator), RA.list);
 *
 * RA.mapIndexed(joinArgs(''), ['a', 'b', 'c']);
 * //=> ["a0a,b,c", "b1a,b,c", "c2a,b,c"]
 *
 * RA.mapIndexed(joinArgs(''), { a: 'a', b: 'b', c: 'c' });
 * //=> {a: "a0[object Object]", b: "b1[object Object]", c: "c2[object Object]"}
 *
 * RA.mapIndexed(joinArgs(''), RA.identity.of('a'));
 * //=> Identity { value: "a0[object Object]" }
 *
 * RA.mapIndexed(joinArgs(''), 'abc');
 * //=> ["a0abc", "b1abc", "c2abc"]
 */
const mapIndexed = addIndex(map);

export default mapIndexed;
