/**
 *
 * @func delayP
 * @memberOf RA
 * @category Function
 * @sig a -> Promise a
 * @param {Number|Object} Argument to be resolved after a certain timeout and returns value if provided.
 * @return {Promise} A Promise that is resolved with the given value if provided after certain delay.
 * @see {@link RA.delayP|delayP}
 * @example
 *
 * RA.delayP(200); //=> Returns Promise(undefined) after 200ms
 * RA.delayP({ timeout: 1000, value: 'hello world' }); //=> Returns Promise('hello world') after 1000ms
 * RA.delayP.reject(100); //=> rejects after 100 milliseconds with `undefined` value
 * RA.delayP.reject({ timeout: 100, value: new Error('error') }); //=> rejects after 100 milliseconds with `Error('error')` value
 */

const makeDelay = (value, delayInMS, promiseType) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (promiseType === 'resolve') {
        return resolve(value);
      }
      return reject(value);
    }, delayInMS);
  });
};

const delayPTemplate = (param, promiseType) => {
  if (typeof param === 'number') {
    return makeDelay(undefined, param, promiseType);
  }
  return makeDelay(param.value, param.timeout, promiseType);
};
const delayP = param => {
  return delayPTemplate(param, 'resolve');
};

delayP.reject = param => {
  return delayPTemplate(param, 'reject');
};

export default delayP;
