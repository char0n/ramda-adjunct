import { traverse, curry, pipe, prop, curryN } from 'ramda';

import Identity from './fantasy-land/Identity';

/**
 * Creates a [Traversable](https://github.com/fantasyland/fantasy-land#traversable) lens
 * from an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning function.
 *
 * When executed, it maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](https://ramdajs.com/docs/#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `traverse` method of the third argument, if present.
 *
 * @func lensTraverse
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.7.0|2.7.0}
 * @category Relation
 * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig fantasy-land/of :: TypeRep f => f ~> a → f a
 * @sig Applicative f => (a -> f a) -> Lens s a
 * @sig Applicative f => TypeRep f -> Lens s a
 * @param {!Object|!Function} TypeRepresentative with an `of` or `fantasy-land/of` method
 * @return {!function} The Traversable lens
 * @see {@link http://ramdajs.com/docs/#lens|R.lens}, {@link http://ramdajs.com/docs/#traverse|R.traverse}
 *
 * @example
 *
 * const maybeLens = RA.lensTraverse(Maybe.of);
 * const safeDiv = n => d => d === 0 ? Maybe.Nothing() : Maybe.Just(n / d)
 *
 * R.over(maybeLens, safeDiv(10), [2, 4, 5]); // => Just([5, 2.5, 2])
 * R.over(maybeLens, safeDiv(10), [2, 0, 5]); // => Nothing
 *
 * R.view(maybeLens, [Maybe.Just(2), Maybe.Just(3)]); // => Maybe.Just([2, 3])
 *
 * R.set(maybeLens, Maybe.Just(1), [Maybe.just(2), Maybe.Just(3)]); // => Maybe.Just([1, 1])
 */
/* eslint-disable no-nested-ternary */
const lensTraverse = curryN(1, (F) => {
  const of =
    typeof F['fantasy-land/of'] === 'function'
      ? F['fantasy-land/of']
      : typeof F.of === 'function'
      ? F.of
      : F;
  const TypeRep = { 'fantasy-land/of': of };

  return curry((toFunctorFn, target) =>
    Identity.of(traverse(TypeRep, pipe(toFunctorFn, prop('value')), target))
  );
});
/* eslint-enable */

export default lensTraverse;
