import { compose, curry, insert, nth, remove } from 'ramda';

/**
 * Returns a new list with the item at the position `fromIdx` moved to the position `toIdx`. If the
 * `toIdx` is out of the `list` range, the item will be placed at the last position of the `list`.
 * When negative indices are provided, the behavior of the move is unspecified.
 *
 * @func move
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.8.0|v2.8.0}
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} fromIdx The position of item to be moved
 * @param {Number} toIdx The position of item after move
 * @param {Array} list The list containing the item to be moved
 * @return {Array}
 * @example
 *
 * const list = ['a', 'b', 'c', 'd', 'e'];
 * RA.move(1, 3, list) //=> ['a', 'c', 'd', 'b', 'e']
 */
const move = curry((fromIdx, toIdx, list) =>
  compose(
    insert(toIdx, nth(fromIdx, list)),
    remove(fromIdx, 1)
  )(list)
);

export default move;
