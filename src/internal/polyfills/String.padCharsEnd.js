const padCharsEnd = (padString, targetLength, value) => {
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
    finalPadString += finalPadString.repeat(
      finalLength / finalPadString.length
    );
  }

  return String(value) + finalPadString.slice(0, finalLength);
};

export default padCharsEnd;
