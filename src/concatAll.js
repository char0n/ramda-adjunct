import { concat, identical, identity, pipe, when, reduce } from 'ramda';

import stubUndefined from './stubUndefined';

const nullSemigroup = { concat: identity };

/**
 * Returns the result of concatenating all semigroups (such as arrays or strings) in passed foldable (such as an array).
 * Returns undefined if empty foldable was passed.
 *
 * @func concatAll
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category List
 * @sig Semigroup s => Foldable s f => f -> (s | undefined)
 * @param {Foldable<Semigroup>} foldable foldable with semigroups to concatenate
 * @return {Semigroup|null} concatenated semigroups, or undefined, if empty foldable was passed
 * @see {@link http://ramdajs.com/docs/#defaultTo|defaultTo}
 * @see {@link http://ramdajs.com/docs/#concat|concat}
 * @see {@link http://ramdajs.com/docs/#unnest|unnest}
 * @see {@link http://ramdajs.com/docs/#join|join}
 * @example
 *
 * concatAll([[1], [2], [3]]); //=> [1, 2, 3]
 * concatAll(['1', '2', '3']); //=> '123'
 * concatAll([]); //=> undefined;
 */
const concatAll = pipe(
  reduce(concat, nullSemigroup),
  when(identical(nullSemigroup), stubUndefined)
);

export default concatAll;
