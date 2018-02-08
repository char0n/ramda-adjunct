import { append, flip } from 'ramda';


/**
 * Returns a new list containing the contents of the given list, followed by the given element.
 * Ramda's `append`, but with argument order reversed: list then value.
 *
 * @func appendFlipped
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.5.0|v2.5.0}
 * @category List
 * @sig [a] -> a -> [a]
 * @param {Array} list The list of elements to add a new item to.
 * @param {*} el The element to add to the end of the new list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append(['write', 'more'], 'tests'); //=> ['write', 'more', 'tests']
 *      R.append([], 'tests'); //=> ['tests']
 *      R.append(['write', 'more'], ['tests']); //=> ['write', 'more', ['tests']]
 */
const appendFlipped = flip(append);

export default appendFlipped;
