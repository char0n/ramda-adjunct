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

const returnResult = (searchValue, replaceValue, str) => {
  // searchValue is an empty string
  if (searchValue === '') return str.replace(/(?:)/g, replaceValue);

  // searchValue is a global regexp
  if (searchValue instanceof RegExp) {
    if (searchValue.flags.indexOf('g') === -1) {
      throw TypeError('`.replaceAll` does not allow non-global regexes');
    }
    return str.replace(searchValue, replaceValue);
  }

  // common case
  return str.split(searchValue).join(replaceValue);
};

const replaceAll = (searchValue, replaceValue, str) => {
  checkArguments(searchValue, replaceValue, str);
  checkValue(str, 'str');
  checkValue(replaceValue, 'replaceValue');
  checkSearchValue(searchValue);

  return returnResult(searchValue, replaceValue, str);
};

export default replaceAll;
