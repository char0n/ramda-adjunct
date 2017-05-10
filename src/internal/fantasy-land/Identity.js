import fl from 'fantasy-land';

import { aliases } from './util';
import { applyTrait, functorTrait, setoidTrait } from './traits';


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
}

Identity.prototype['@@type'] = 'RA/Identity';
Object.assign(Identity.prototype, applyTrait);
Object.assign(Identity.prototype, functorTrait);
Object.assign(Identity.prototype, setoidTrait);
Object.assign(Identity.prototype, aliases(Identity.prototype));


export default Identity;
