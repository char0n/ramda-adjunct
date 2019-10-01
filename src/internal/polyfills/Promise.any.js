import { map } from 'ramda';

import resolveP from '../../resolveP';

export class AggregatedError extends Error {
  constructor(exceptions) {
    super();

    this.exceptions = exceptions;
  }
}

const anyPolyfill = iterable => {
  const exceptions = [];

  return new Promise((resolve, reject) => {
    const onReject = e => {
      exceptions.push(e);

      if (exceptions.length === iterable.length) {
        reject(new AggregatedError(exceptions));
      }
    };

    map(
      p => {
        resolveP(p)
          .then(resolve)
          .catch(onReject);
      },
      [...iterable]
    );
  });
};

export default anyPolyfill;
