import { __ } from 'ramda';

import invokeArgs from './invokeArgs';

/**
 * Invokes the method at path of object.
 *
 * @func invoke
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.31.0|v2.31.0}
 * @category Object
 * @sig Array -> Object -> *
 * @param {Array.<string|number>} path The path of the method to invoke
 * @param {Object} obj The object to query
 * @return {*}
 * @example
 *
 * RA.invoke(['random'], Math); //=> 0.5113253820009047
 */
const invoke = invokeArgs(__, [], __);

export default invoke;
