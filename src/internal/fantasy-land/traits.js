import fl from 'fantasy-land';


export const functorTrait = {
  map(fn) {
    return this.constructor.of(fn(this.value));
  },
};
functorTrait[fl.map] = functorTrait.map;

export const applyTrait = {
  ap(applyWithFn) {
    return applyWithFn.map(fn => fn(this.value));
  },
};
applyTrait[fl.ap] = applyTrait.ap;
