import sliceTo from '../sliceTo';
import repeat from './repeat';

const createPadding = (padding, targetLength) => {
  const n = Math.ceil(targetLength / padding.length);
  return sliceTo(targetLength, repeat(padding, n));
};

export default createPadding;
