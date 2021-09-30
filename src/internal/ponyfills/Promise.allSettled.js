import { map } from 'ramda';

import allP from '../../allP';
import resolveP from '../../resolveP';

const onFulfill = (value) => ({ status: 'fulfilled', value });
const onReject = (reason) => ({ status: 'rejected', reason });

const allSettledPonyfill = (iterable) => {
  const array = map(
    (p) => resolveP(p).then(onFulfill).catch(onReject),
    [...iterable]
  );

  return allP(array);
};

export default allSettledPonyfill;
