import { __, append, identity, useWith } from 'ramda';

import sortByProps from './sortByProps';

/**
 * Sort a list of objects by a property.
 *
 * @func sortByProp
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/3.4.0|v3.4.0}
 * @category List
 * @sig k -> [{k: v}] -> [{k: v}]
 * @param {Array.<string>} prop The property in the list param to sort by
 * @param {Array.<object>} list A list of objects to be sorted
 * @return {Array.<object>} A new list sorted by the property in the prop param
 * @example
 *
 * // sorting list of tuples
 * const sortByFirstItem = sortByProp(0);
 * const listOfTuples = [[-1, 1], [-2, 2], [-3, 3]];
 * sortByFirstItem(listOfTuples); // => [[-3, 3], [-2, 2], [-1, 1]]
 *
 * // sorting list of objects
 * const sortByName = sortByProp('name');
 * const alice = {
 *   name: 'ALICE',
 *   age: 101,
 * };
 * const bob = {
 *   name: 'Bob',
 *   age: -10,
 * };
 * const clara = {
 *   name: 'clara',
 *   age: 314.159,
 * };
 * const people = [clara, bob, alice];
 * sortByName(people); // => [alice, bob, clara]
 */

const addValueInAnArray = append(__, []);

const sortByProp = useWith(sortByProps, [addValueInAnArray, identity]);

export default sortByProp;
