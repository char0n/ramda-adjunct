import { curryN } from 'ramda';
/**
 * @description An helper to generate fake String.match results
 * @param {string[]} val the value(s) found
 * @param {number} index the place of the value in the searched string
 * @param {string} input the searched string
 * @param {Object|undefined} input the searched string
 * @return {string[]} an array  enhanced with previous props
 */
export default curryN(4, (val, input, index, groups) => {
  const result = val instanceof Array ? val : [val];
  result.index = index;
  result.input = input;
  result.groups = groups;
  return result;
});
