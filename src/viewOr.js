import { view, defaultTo, curry } from 'ramda';

/**
 * If the data structure "viewed" through `lens` contains value, the value is returned.
 * Otherwise returns the provided `defaultValue`.
 * 
 * @func viewOr
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.13.0|1.13.0}
 * @category Lens
 * @sig * -> lens -> data -> *
 * @param {*} defaultValue Defauly value
 * @param {Function} lens Van Laarhoven lens
 * @param {*} data The data structure to apply the lens to
 * 
 * @example
 * 
 * RA.viewOr('N/A', R.lensProp('x'), {}); // => 'N/A'
 * RA.viewOr('N/A', R.lensProp('x'), { x: 1 }); // => 1
 * RA.viewOr('some', R.lensProp('y'), { y: null }); // => 'some'
 * RA.viewOr('some', R.lensProp('y'), { y: false }); // => false
 */

const viewOr = curry(
  (defaultValue, lens, data) => defaultTo(defaultValue, view(lens, data))
);

export default viewOr;
