import { traverse, curry, pipe, prop } from 'ramda';

import Identity from './fantasy-land/Identity';

/**
 * Creates a [Traversable](https://github.com/fantasyland/fantasy-land#traversable) lens
 * from an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning function.
 *
 * When executed, it maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `traverse` method of the third argument, if present.
 *
 * @func lensTraverse
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.7.0|2.7.0}
 * @category Relation
 * @typedef Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Applicative f => (a -> f a) -> Lens s a
 * @param {!function} of The Applicative-returning function
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
const lensTraverse = of =>
  curry((toFunctorFn, target) =>
    Identity.of(
      traverse(
        of,
        pipe(
          toFunctorFn,
          prop('value')
        ),
        target
      )
    )
  );

export default lensTraverse;
