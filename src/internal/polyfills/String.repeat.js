import isNotFinite from '../../isNotFinite';
import isNegative from '../../isNegative';

const repeat = (value, count) => {
  let validCount = Number(count);

  if (validCount !== count) {
    validCount = 0;
  }

  if (isNegative(validCount)) {
    throw new RangeError('repeat count must be non-negative');
  }

  if (isNotFinite(validCount)) {
    throw new RangeError('repeat count must be less than infinity');
  }

  validCount = Math.floor(validCount);

  if (value.length === 0 || validCount === 0) {
    return '';
  }

  // Ensuring validCount is a 31-bit integer allows us to heavily optimize the
  // main part. But anyway, most current (August 2014) browsers can't handle
  // strings 1 << 28 chars or longer, so:
  // eslint-disable-next-line no-bitwise
  if (value.length * validCount >= 1 << 28) {
    throw new RangeError('repeat count must not overflow maximum string size');
  }

  const maxCount = value.length * validCount;

  validCount = Math.floor(Math.log(validCount) / Math.log(2));

  let result = value;

  while (validCount) {
    result += value;
    validCount -= 1;
  }

  result += result.substring(0, maxCount - result.length);

  return result;
};

export default repeat;
