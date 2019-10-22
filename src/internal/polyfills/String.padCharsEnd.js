import isFunction from '../../isFunction';
import repeat from './String.repeat';

const padCharsEndPolyfill = (padString, targetLength, value) => {
  // eslint-disable-next-line no-bitwise
  let finalLength = targetLength >> 0;
  let finalPadString = String(
    typeof padString !== 'undefined' ? padString : ' '
  );

  if (value.length > finalLength) {
    return String(value);
  }
  finalLength -= value.length;
  if (finalLength > finalPadString.length) {
    const remainingLength = finalLength / finalPadString.length;
    finalPadString += isFunction(String.prototype.repeat)
      ? finalPadString.repeat(remainingLength)
      : repeat(finalPadString, remainingLength);
  }

  return String(value) + finalPadString.slice(0, finalLength);
};

export default padCharsEndPolyfill;
