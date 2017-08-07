'use strict';

/* eslint-disable no-param-reassign */
exports.defineTags = (dictionary) => {
  dictionary.defineTag('sig', {
    mustHaveValue: true,
    canHaveType: false,
    canHaveName: false,
    onTagged(doclet, tag) {
      doclet.sig = tag.value;
    },
  });

  dictionary.defineTag('category', {
    mustHaveValue: true,
    canHaveType: false,
    canHaveName: false,
    onTagged(doclet, tag) {
      doclet.category = tag.value;
    },
  });

  dictionary.defineTag('aliases', {
    mustHaveValue: true,
    canHaveType: false,
    canHaveName: false,
    onTagged(doclet, tag) {
      doclet.aliases = tag.value;
    },
  });
};
/* eslint-enable no-param-reassign */
