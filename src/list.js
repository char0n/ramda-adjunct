import { unapply, identity } from 'ramda';

/**
 * Creates a list from arguments.
 *
 * @func list
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.1.0|v1.1.0}
 * @category List
 * @sig  a... -> [a...]
 * @param {...*} items The items of the feature list
 * @return {Array} New list created from items
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#create-a-list-function|Ramda Cookbook}
 * @example
 *
 * RA.list('a', 'b', 'c'); //=> ['a', 'b', 'c']
 */
const list = unapply(identity);

export default list;
