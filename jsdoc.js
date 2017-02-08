'use strict';

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
};