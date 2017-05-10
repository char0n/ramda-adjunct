import fl from 'fantasy-land';
import { equals, path } from 'ramda';


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
    if (!equals(path(['@@type'], this), path(['@@type'], setoid))) { return false } // not same type

    return equals(this.value, setoid.value);
  },
};
