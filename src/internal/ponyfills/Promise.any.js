import { map } from 'ramda';

import resolveP from '../../resolveP';

export class AggregatedError extends Error {
  constructor(errors = [], message = '') {
    super(message);

    this.errors = errors;
  }
}

const anyPonyfill = (iterable) => {
  const exceptions = [];

  return new Promise((resolve, reject) => {
    const onReject = (e) => {
      exceptions.push(e);

      if (exceptions.length === iterable.length) {
        reject(new AggregatedError(exceptions));
      }
    };

    map((p) => resolveP(p).then(resolve).catch(onReject), [...iterable]);
  });
};

export default anyPonyfill;
