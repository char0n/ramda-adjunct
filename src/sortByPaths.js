import { ascend, identity, map, path, pipe, sortWith, useWith } from 'ramda';

const pathToAscendSort = pipe(path, ascend);
const mapPathsToAscendSort = map(pathToAscendSort);

/**
 * Sort a list of objects by a list of paths (if first path value is equivalent, sort by second, etc).
 *
 * @func sortByPaths
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/3.1.0|v3.1.0}
 * @category List
 * @sig [[k]] -> [{k: v}] -> [{k: v}]
 * @param {Array.<Array.<string>>} paths A list of paths in the list param to sort by
 * @param {Array.<object>} list A list of objects to be sorted
 * @return {Array.<object>} A new list sorted by the paths in the paths param
 * @example
 *
 * const alice = {
 *   name: 'Alice',
 *   address: {
 *     street: 31,
 *     zipCode: 97777,
 *   },
 * };
 * const bob = {
 *   name: 'Bob',
 *   address: {
 *     street: 31,
 *     zipCode: 55555,
 *   },
 * };
 * const clara = {
 *   name: 'Clara',
 *   address: {
 *     street: 32,
 *     zipCode: 90210,
 *   },
 * };
 * const people = [clara, bob, alice]
 *
 * RA.sortByPaths([
 *   ['address', 'street'],
 *   ['address', 'zipCode'],
 * ], people); // => [bob, alice, clara]
 *
 * RA.sortByPaths([
 *   ['address', 'zipCode'],
 *   ['address', 'street'],
 * ], people); // => [bob, clara, alice]
 */

const sortByPaths = useWith(sortWith, [mapPathsToAscendSort, identity]);

export default sortByPaths;
