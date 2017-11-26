/**
 * This function returns a new empty object.
 *
 * @func stubObj
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.1.0|v2.1.0}
 * @category Function
 * @sig ... -> Object
 * @aliases stubObject
 * @return {Object} Returns the new empty object.
 * @example
 *
 * RA.stubObj(); //=> {}
 * RA.stubObj(1, 2, 3); //=> {}
 */

const stubObj = () => ({});

export default stubObj;
