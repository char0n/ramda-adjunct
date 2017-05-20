import { of, ap, map, equals, concat } from 'fantasy-land';

import { aliases } from './util';
import { applyTrait, functorTrait, setoidTrait, semigroupTrait } from './traits';


/**
 * The simplest {@link https://github.com/fantasyland/fantasy-land|fantasy-land}
 * compatible monad which attaches no information to values.
 *
 * The Identity type is a very simple type that has no interesting side effects and
 * is effectively just a container of some value. So why does it exist ?
 * The Identity type is often used as the base monad of a monad
 * transformer when no other behaviour is required.
 *
 * @memberOf RA
 * @implements
 * {@link https://github.com/fantasyland/fantasy-land#apply|Apply},
 * {@link https://github.com/fantasyland/fantasy-land#applicative|Applicative},
 * {@link https://github.com/fantasyland/fantasy-land#apply|Functor},
 * {@link https://github.com/fantasyland/fantasy-land#apply|Setoid},
 * {@link https://github.com/fantasyland/fantasy-land#apply|Semigroup}
 * @since {@link https://char0n.github.io/ramda-adjunct/1.8.0|v1.8.0}
 */
class Identity {
  /**
   * Fantasy land {@link https://github.com/fantasyland/fantasy-land#applicative|Applicative} specification.
   * @static
   * @param {*} value
   * @returns {RA.Identity}
   * @example
   *
   * const a = Identity.of(1); //=> Identity(1)
   */
  static [of](value) {
    return new Identity(value);
  }

  /**
   * @static
   */
  static get ['@@type']() {
    return 'RA/Identity';
  }

  /**
   * Private constructor. Use {@link RA.Identity.of|Identity.of} instead.
   *
   * @private
   * @param {*} value
   * @return {RA.Identity}
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * Catamorphism for a value.
   * @returns {*}
   * @example
   *
   * const a = Identity.of(1);
   * a.get(); //=> 1
   */
  get() {
    return this.value;
  }

  /**
   * Fantasy land {@link https://github.com/fantasyland/fantasy-land#apply|Apply} specification.
   * @param {RA.Identity} applyWithFn
   * @return {RA.Identity}
   * @example
   *
   * const a = Identity.of(1);
   * const b = Identity.of(1).map(a => b => a + b);
   *
   * a.ap(b); //=> Identity(2)
   */
  [ap](applyWithFn) {
    return applyTrait[ap].call(this, applyWithFn);
  }

  /**
   * Fantasy land {@link https://github.com/fantasyland/fantasy-land#functor|Functor} specification.
   * @param {Function} fn
   * @return {RA.Identity}
   * @example
   *
   * const a = Identity.of(1);
   * a.map(a => a + 1); //=> Identity(2)
   */
  [map](fn) {
    return functorTrait[map].call(this, fn);
  }

  /**
   * Fantasy land {@link https://github.com/fantasyland/fantasy-land#setoid|Setoid} specification.
   * @param {RA.Identity} setoid
   * @return {boolean}
   * @example
   *
   * const a = Identity.of(1);
   * const b = Identity.of(1);
   * const c = Identity.of(2);
   *
   * a.equlas(b); //=> true
   * a.equals(c); //=> false
   */
  [equals](setoid) {
    return setoidTrait[equals].call(this, setoid);
  }

  /**
   * Fantasy land {@link https://github.com/fantasyland/fantasy-land#semigroup|Semigroup} specification.
   * @param {RA.Identity} semigroup
   * @return {RA.Identity}
   * @example
   *
   * const a = Identity.of(1);
   * const b = Identity.of(1);
   * a.concat(b); //=> 2
   *
   * const c = Identity.of('c');
   * const d = Identity.of('d');
   * c.concat(d); //=> 'cd'
   *
   * const e = Identity.of(['e']);
   * const f = Identity.of(['f']);
   * e.concat(f); //=> ['e', 'f']
   */
  [concat](semigroup) {
    return semigroupTrait[concat].call(this, semigroup);
  }
}

aliases(Identity).forEach(([alias, fn]) => {
  Identity[alias] = fn;
});
aliases(Identity.prototype).forEach(([alias, fn]) => {
  Identity.prototype[alias] = fn;
});

export default Identity;
