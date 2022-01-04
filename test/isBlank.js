import { assert } from 'chai';

import * as RA from '../src';

describe('isBlank', function () {
  context('given string value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isBlank(''));
      assert.isTrue(RA.isBlank('  '));
      assert.isTrue(RA.isBlank('\t\n'));
    });

    specify('should return false', function () {
      assert.isTrue(RA.isBlank('value'));
    });
  });

  context('given object value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isBlank({}));
    });

    specify('should return false', function () {
      assert.isFalse(RA.isBlank({ foo: 'foo' }));
    });
  });

  context('given array value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isBlank([]));
    });

    specify('should return false', function () {
      assert.isFalse(RA.isBlank([1, 2, 3]));
    });
  });

  context('given null value', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isBlank(null));
    });
  });

  context('given undefined value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isBlank(undefined));
    });
  });

  context('given boolean value', function () {
    specify('should return true', function () {
      assert.isTrue(RA.isBlank(false));
    });

    specify('should return false', function () {
      assert.isFalse(RA.isBlank(true));
    });
  });
});
