const replaceAll = (str, searchValue, replaceValue) => {
  if (str == null || searchValue == null || replaceValue == null) {
    throw TypeError('Input values must not be `null` or `undefined`');
  }

  if (typeof str !== 'string') {
    if (!(str instanceof String)) {
      throw TypeError('`str` must be a string');
    }
  }

  if (typeof replaceValue !== 'string') {
    if (!(replaceValue instanceof String)) {
      throw TypeError('`replaceValue` must be a string');
    }
  }

  if (typeof searchValue !== 'string') {
    if (!(searchValue instanceof String)) {
      if (!(searchValue instanceof RegExp)) {
        throw TypeError('`searchValue`  must be a string or an regexp');
      }
    }
  }

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

export default replaceAll;
