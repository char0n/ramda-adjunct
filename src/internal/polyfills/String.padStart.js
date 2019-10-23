import isFunction from '../../isFunction';
import stringRepeat from './String.repeat';

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
const stringPadStartPolyfill = (padString, targetLength, value) => {
  // eslint-disable-next-line no-bitwise
  let finalLength = targetLength >> 0; // truncate if number, or convert non-number to 0;
  let finalPadString = String(
    typeof padString !== 'undefined' ? padString : ' '
  );

  // Return the original string, if targeted lenght is less than orignal strings lenght
  if (value.length >= finalLength) {
    return String(value);
  }

  finalLength -= value.length;

  if (finalLength > finalPadString.length) {
    const lenghtToPad = finalLength / finalLength.length;

    // append to original to ensure we are longer than needed
    finalPadString += isFunction(String.prototype.repeat)
      ? finalPadString.repeat(lenghtToPad)
      : stringRepeat(finalPadString, lenghtToPad);
  }

  return finalPadString.slice(0, finalLength) + String(value);
  // return finalPadString.slice(0, finalLength);
};

export default stringPadStartPolyfill;
