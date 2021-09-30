import { empty as emptyR } from 'ramda';

import * as fl from './mapping';
import {
  applyTrait,
  functorTrait,
  setoidTrait,
  semigroupTrait,
  chainTrait,
  ordTrait,
} from './traits';

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
 * {@link https://github.com/fantasyland/fantasy-land#functor|Functor},
 * {@link https://github.com/fantasyland/fantasy-land#setoid|Setoid},
 * {@link https://github.com/fantasyland/fantasy-land#semigroup|Semigroup},
 * {@link https://github.com/fantasyland/fantasy-land#chain|Chain},
 * {@link https://github.com/fantasyland/fantasy-land#monad|Monad},
 * {@link https://github.com/fantasyland/fantasy-land#ord|Ord},
 * {@link https://github.com/fantasyland/fantasy-land#monoid|Monoid*},
 * {@link https://github.com/fantasyland/fantasy-land#contravariant|Contravariant}
 * @since {@link https://char0n.github.io/ramda-adjunct/1.8.0|v1.8.0}
 */
class Identity {
  /**
   * Fantasy land {@link https://github.com/fantasyland/fantasy-land#applicative|Applicative} specification.
   *
   * @static
   * @sig of :: Applicative f => a -> f a
   * @param {*} value
   * @returns {RA.Identity}
   * @example
   *
   * const a = Identity.of(1); //=> Identity(1)
   */
  static [fl.of](value) {
    return new Identity(value);
  }

  static of(value) {
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
   *
   * @sig ap :: Apply f => f a ~> f (a -> b) -> f b
   * @param {RA.Identity} applyWithFn
   * @return {RA.Identity}
   * @example
   *
   * const a = Identity.of(1);
   * const b = Identity.of(1).map(a => b => a + b);
   *
   * a.ap(b); //=> Identity(2)
   */
  [fl.ap](applyWithFn) {
    return applyTrait[fl.ap].call(this, applyWithFn);
  }

  ap(applyWithFn) {
    return this[fl.ap](applyWithFn);
  }

  /**
   * Fantasy land {@link https://github.com/fantasyland/fantasy-land#functor|Functor} specification.
   *
   * @sig map :: Functor f => f a ~> (a -> b) -> f b
   * @param {Function} fn
   * @return {RA.Identity}
   * @example
   *
   * const a = Identity.of(1);
   * a.map(a => a + 1); //=> Identity(2)
   */
  [fl.map](fn) {
    return functorTrait[fl.map].call(this, fn);
  }

  map(fn) {
    return this[fl.map](fn);
  }

  /**
   * Fantasy land {@link https://github.com/fantasyland/fantasy-land#setoid|Setoid} specification.
   *
   * @sig equals :: Setoid a => a ~> a -> Boolean
   * @param {RA.Identity} setoid
   * @return {boolean}
   * @example
   *
   * const a = Identity.of(1);
   * const b = Identity.of(1);
   * const c = Identity.of(2);
   *
   * a.equals(b); //=> true
   * a.equals(c); //=> false
   */
  [fl.equals](setoid) {
    return setoidTrait[fl.equals].call(this, setoid);
  }

  equals(setoid) {
    return this[fl.equals](setoid);
  }

  /**
   * Fantasy land {@link https://github.com/fantasyland/fantasy-land#semigroup|Semigroup} specification.
   *
   * @sig concat :: Semigroup a => a ~> a -> a
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
  [fl.concat](semigroup) {
    return semigroupTrait[fl.concat].call(this, semigroup);
  }

  concat(semigroup) {
    return this[fl.concat](semigroup);
  }

  /**
   * Fantasy land {@link https://github.com/fantasyland/fantasy-land#chain|Chain} specification.
   *
   * @sig chain :: Chain m => m a ~> (a -> m b) -> m b
   * @param {Function} fn Function returning the value of the same {@link https://github.com/fantasyland/fantasy-land#semigroup|Chain}
   * @return {RA.Identity}
   * @example
   *
   * const a = Identity.of(1);
   * const fn = val => Identity.of(val + 1);
   *
   * a.chain(fn).chain(fn); //=> Identity(3)
   */
  [fl.chain](fn) {
    return chainTrait[fl.chain].call(this, fn);
  }

  chain(fn) {
    return this[fl.chain](fn);
  }

  /**
   * Fantasy land {@link https://github.com/fantasyland/fantasy-land#ord|Ord} specification.
   *
   * @sig lte :: Ord a => a ~> a -> Boolean
   * @param {RA.Identity} ord
   * @return {boolean}
   * @example
   *
   * const a = Identity.of(1);
   * const b = Identity.of(1);
   * const c = Identity.of(2);
   *
   * a.lte(b); //=> true
   * a.lte(c); //=> true
   * c.lte(a); //=> false
   */
  [fl.lte](ord) {
    return ordTrait[fl.lte].call(this, ord);
  }

  lte(ord) {
    return this[fl.lte](ord);
  }

  /**
   * Fantasy land {@link https://github.com/fantasyland/fantasy-land#monoid|Monoid*} specification.
   * Partial implementation of Monoid specification. `empty` method on instance only, returning
   * identity value of the wrapped type. Using `R.empty` under the hood.
   *
   *
   * @sig empty :: Monoid m => () -> m
   * @return {RA.Identity}
   * @example
   *
   * const a = Identity.of('test');
   * const i = a.empty();
   *
   * a.concat(i); //=> Identity('string');
   * i.concat(a); //=> Identity('string');
   */
  [fl.empty]() {
    return this.constructor.of(emptyR(this.value));
  }

  empty() {
    return this[fl.empty]();
  }

  /**
   * Fantasy land {@link https://github.com/fantasyland/fantasy-land#contravariant|Contravariant} specification.
   *
   * @sig contramap :: Contravariant f => f a ~> (b -> a) -> f b
   * @param {Function} fn
   * @return {RA.Identity}
   * @example
   *
   * const identity = a => a;
   * const add1 = a => a + 1;
   * const divide2 = a => a / 2;
   *
   * Identity.of(divide2).contramap(add1).get()(3); //=> 2
   * Identity.of(identity).contramap(divide2).contramap(add1).get()(3); //=> 2
   * Identity.of(identity).contramap(a => divide2(add1(a))).get()(3); //=> 2
   */
  [fl.contramap](fn) {
    return this.constructor.of((value) => this.value(fn(value)));
  }

  contramap(fn) {
    return this[fl.contramap](fn);
  }
}

export default Identity;
