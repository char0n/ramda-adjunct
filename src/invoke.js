import * as R from 'ramda';

import invokeArgs from './invokeArgs';

/**
 * Invokes the method at path of object with no arguments.
 *
 * @func invoke
 * @memberOf RA
 * @category Object
 * @sig Array -> Object -> *
 * @param {Array.<string|number>} path The path of the method to invoke
 * @param {Object} obj The object to query
 * @return {*}
 * @example
 *
 * RA.invokeArgs(['abs'], Math); //=> NaN
 * RA.invokeArgs(['path', 'to', 'non-existent', 'method'], Math); //=> undefined
 */
const invoke = invokeArgs(R.__, [], R.__);

export default invoke;
