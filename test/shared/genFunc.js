'use strict';

module.exports = (() => {
  try {
    return new Function('return function* () { }')();
  } catch (e) {
    return undefined;
  }
})();
