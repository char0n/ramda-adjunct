import { curry } from 'ramda';

import invokeArgs from './invokeArgs';

/**
 * Checks if an object exists in another object's prototype chain.
 *
 * @func isPrototypeOf
 * @category Object
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.31.0|v2.31.0}
 * @sig * -> Boolean
 * @param {Object} type The prototype that we're searching for
 * @param {Object} object The object whose prototype chain will be searched
 * @return {boolean}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf|Object.prorotype.isPrototypeOf}
 * @example
 * function Foo() {}
 * function Bar() {}
 * function Baz() {}
 *
 * Bar.prototype = Object.create(Foo.prototype);
 * Baz.prototype = Object.create(Bar.prototype);
 *
 * const baz = new Baz();
 *
 * RA.isPrototypeOf(Baz, baz); // => true
 * RA.isPrototypeOf(Bar, baz); // => true
 * RA.isPrototypeOf(Foo, baz); // => true
 * RA.isPrototypeOf(Object, baz); // => true
 */
const isPrototypeOf = curry((type, object) =>
  Boolean(invokeArgs(['prototype', 'isPrototypeOf'], [object], type))
);

export default isPrototypeOf;
