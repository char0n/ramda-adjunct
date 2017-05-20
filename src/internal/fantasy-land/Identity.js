import fl from 'fantasy-land';

import { aliases } from './util';
import { applyTrait, functorTrait, setoidTrait, semigroupTrait } from './traits';


class Identity {
  static [fl.of](value) {
    return new Identity(value);
  }

  static get ['@@type']() {
    return 'RA/Identity';
  }

  constructor(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }

  [fl.ap](...args) {
    return applyTrait[fl.ap].call(this, ...args);
  }

  [fl.map](...args) {
    return functorTrait[fl.map].call(this, ...args);
  }

  [fl.equals](...args) {
    return setoidTrait[fl.equals].call(this, ...args);
  }

  [fl.concat](...args) {
    return semigroupTrait[fl.concat].call(this, ...args);
  }
}

aliases(Identity).forEach(([alias, fn]) => {
  Identity[alias] = fn;
});
aliases(Identity.prototype).forEach(([alias, fn]) => {
  Identity.prototype[alias] = fn;
});

export default Identity;
