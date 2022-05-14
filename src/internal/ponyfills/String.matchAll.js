const checkArguments = (searchValue, str) => {
  if (str == null || searchValue == null) {
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
    throw TypeError('`searchValue` must be a string or a regexp');
  }
};

const returnResult = (searchValue, str) => {
  // make searchValue a global regexp if needed
  const searchRegExp =
    typeof searchValue === 'string'
      ? new RegExp(searchValue, 'g')
      : searchValue;

  if (searchRegExp.flags.indexOf('g') === -1) {
    throw TypeError('`.matchAll` does not allow non-global regexes');
  }

  const matches = [];
  let { lastIndex } = searchRegExp;
  let match = searchRegExp.exec(str);

  while (match) {
    matches.push(match);

    // manual lastIndex incrementation for corner cases like //g regexp
    if (searchRegExp.lastIndex === lastIndex) {
      lastIndex += 1;
      searchRegExp.lastIndex = lastIndex;
    }

    // next match
    match = searchRegExp.exec(str);
  }
  return matches;
};

const matchAll = (searchValue, str) => {
  checkArguments(searchValue, str);
  checkValue(str, 'str');
  checkSearchValue(searchValue);

  return returnResult(searchValue, str);
};

export default matchAll;
