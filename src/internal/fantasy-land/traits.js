import fl from 'fantasy-land';
import { equals } from 'ramda';

import { isSameType } from './util';


export const functorTrait = {
  [fl.map](fn) {
    return this.constructor.of(fn(this.value));
  },
};

export const applyTrait = {
  [fl.ap](applyWithFn) {
    return applyWithFn.map(fn => fn(this.value));
  },
};

export const setoidTrait = {
  [fl.equals](setoid) {
    return isSameType(this, setoid) && equals(this.value, setoid.value);
  },
};
