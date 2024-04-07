import { equals, pathSatisfies } from 'ramda';

import isString from '../isString.js';
import isNumber from '../isNumber.js';
import isFunction from '../isFunction.js';
import { isSameType } from './util.js';
import * as fl from './mapping.js';

export const functorTrait = {
  [fl.map](fn) {
    return this.constructor[fl.of](fn(this.value));
  },
};

export const applyTrait = {
  [fl.ap](applyWithFn) {
    return applyWithFn.map((fn) => fn(this.value));
  },
};

export const setoidTrait = {
  [fl.equals](setoid) {
    return isSameType(this, setoid) && equals(this.value, setoid.value);
  },
};

export const semigroupTrait = {
  [fl.concat](semigroup) {
    let concatenatedValue = this.value;

    if (isString(this.value) || isNumber(this.value)) {
      concatenatedValue = this.value + semigroup.value;
    } else if (pathSatisfies(isFunction, ['value', fl.concat], this)) {
      concatenatedValue = this.value[fl.concat](semigroup.value);
    } else if (pathSatisfies(isFunction, ['value', 'concat'], this)) {
      concatenatedValue = this.value.concat(semigroup.value);
    }

    return this.constructor[fl.of](concatenatedValue);
  },
};

export const chainTrait = {
  [fl.chain](fn) {
    const newChain = fn(this.value);

    return isSameType(this, newChain) ? newChain : this;
  },
};

export const ordTrait = {
  [fl.lte](ord) {
    return (
      isSameType(this, ord) && (this.value < ord.value || this[fl.equals](ord))
    );
  },
};
