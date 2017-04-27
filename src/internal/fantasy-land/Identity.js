import fl from 'fantasy-land';

import { applyTrait, functorTrait } from './traits';


class Identity {
  static of(value) {
    return new Identity(value);
  }

  static [fl.of](value) {
    return Identity.of(value);
  }

  constructor(value) {
    this.value = value;
  }

  ap(applyWithFn) {
    return applyTrait.ap.bind(this)(applyWithFn);
  }

  [fl.ap](applyWithFn) {
    return this.ap(applyWithFn);
  }

  map(fn) {
    return functorTrait.map.bind(this)(fn);
  }

  [fl.map](fn) {
    return this.map(fn);
  }
}

export default Identity;
