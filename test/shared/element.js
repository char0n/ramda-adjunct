'use strict';

module.exports = (() => {
  if (typeof document === 'object') {
    return document.createElement('span');
  }
  return undefined;
})();
