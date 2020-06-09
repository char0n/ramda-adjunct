import isFinite from '../../isFinite';

const truncPonyfill = (v) => {
  const numV = Number(v);

  if (!isFinite(numV)) {
    return numV;
  }

  // eslint-disable-next-line no-nested-ternary
  return numV - (numV % 1) || (numV < 0 ? -0 : numV === 0 ? numV : 0);
};

export default truncPonyfill;
