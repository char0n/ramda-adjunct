import isFunction from '../../isFunction';
import isNotUndefined from '../../isNotUndefined';
import repeat from './String.repeat';

const padStartPonyfill = (padString, targetLength, value) => {
  // eslint-disable-next-line no-bitwise
  let finalLength = targetLength >> 0; // truncate if number, or convert non-number to 0;
  let finalPadString = String(isNotUndefined(padString) ? padString : ' ');

  // return the original string, if targeted length is less than original strings length
  if (value.length >= finalLength) {
    return String(value);
  }

  finalLength -= value.length;
  if (finalLength > finalPadString.length) {
    const lenghtToPad = finalLength / finalPadString.length;
    // append to original to ensure we are longer than needed
    finalPadString += isFunction(String.prototype.repeat)
      ? finalPadString.repeat(lenghtToPad)
      : repeat(finalPadString, lenghtToPad);
  }

  return finalPadString.slice(0, finalLength) + String(value);
};

export default padStartPonyfill;
