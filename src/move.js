import { curry, compose, insert, nth, remove } from 'ramda';

/**
 * Returns a new list with the item at the position `fromIdx` moved to the position `toIdx`. If the * `toIdx` is greater than the number of items - 1, it will be placed in the last position.
 *
 * @func move
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.7.0|v2.7.0}
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} fromIdx Position of item to be moved
 * @param {Number} toIdx Position of item after move
 * @return {Array}
 * @example
 *
 * const list = ['a', 'b', 'c', 'd', 'e'];
 * RA.move(1, 3, list) //=> ['a', 'c', 'd', 'b', 'e']
 */
const moveItem = curry((oldIdx, newIdx, list) =>
  compose(insert(newIdx, nth(oldIdx, list)), remove(oldIdx, 1))(list)
);

export default moveItem;
