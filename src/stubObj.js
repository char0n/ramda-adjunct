import { always } from 'ramda';

/**
 * A function that returns new empty object; different reference for every call.
 *
 * @func stubObj
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.1.0|v2.1.0}
 * @category Function
 * @sig ... -> {}
 * @return {{}}
 * @example
 *
 * RA.stubObj(); //=> {}
 * RA.stubObj(1, 2, 3); //=> {}
 */
const stubObj = always({});

export default stubObj;
