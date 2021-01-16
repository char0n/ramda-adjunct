import { curry } from 'ramda';

/**
 * Checks if `type`'s `prototype` property is in the prototype chain of `object`.
 *
 * @func isPrototypeOf
 * @category Object
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.31.0|v2.31.0}
 * @sig * -> Boolean
 * @param {Object} type The [object] prototype to test
 * @param {Object} object The object to test
 * @return {boolean}
 * @see {@link Object.prorotype.isPrototypeOf}
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
  // eslint-disable-next-line no-prototype-builtins
  type.prototype.isPrototypeOf(object)
);

export default isPrototypeOf;
