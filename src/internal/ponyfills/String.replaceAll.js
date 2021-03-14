import { replace } from 'ramda';

import isRegExp from '../../isRegExp';
import escapeRegExp from '../../escapeRegExp';

const checkArguments = (searchValue, replaceValue, str) => {
  if (str == null || searchValue == null || replaceValue == null) {
    throw TypeError('Input values must not be `null` or `undefined`');
  }
};

const checkValue = (value, valueName) => {
  if (typeof value !== 'string') {
    if (!(value instanceof String)) {
      throw TypeError(`\`${valueName}\` must be a string`);
    }
  }
};

const checkSearchValue = (searchValue) => {
  if (
    typeof searchValue !== 'string' &&
    !(searchValue instanceof String) &&
    !(searchValue instanceof RegExp)
  ) {
    throw TypeError('`searchValue` must be a string or an regexp');
  }
};

const replaceAll = (searchValue, replaceValue, str) => {
  checkArguments(searchValue, replaceValue, str);
  checkValue(str, 'str');
  checkValue(replaceValue, 'replaceValue');
  checkSearchValue(searchValue);

  const regexp = new RegExp(
    isRegExp(searchValue) ? searchValue : escapeRegExp(searchValue),
    'g'
  );

  return replace(regexp, replaceValue, str);
};

export default replaceAll;
