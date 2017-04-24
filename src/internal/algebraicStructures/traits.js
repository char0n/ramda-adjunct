import fantasyLand from 'fantasy-land';


export const applicativeTrait = {
  of(value) {
    return { ...this, value };
  },
};
applicativeTrait[fantasyLand.of] = applicativeTrait.of;

export const functorTrait = {
  map(fn) {
    return this.of(fn(this.value));
  },
};
functorTrait[fantasyLand.map] = functorTrait.map;

export const applyTrait = {
  ap(monadWithApplyOfAFunction) {
    return monadWithApplyOfAFunction.map(fn => fn(this.value));
  },
};
applyTrait[fantasyLand.ap] = applyTrait.ap;
