import { assert } from 'chai';

import * as RA from '../src';

describe.only('presence', function () {
  context('given an object', function () {
    specify('should return the object', function () {
      const val = { val: 'val' };

      assert.strictEqual(RA.presence(val), val);
    });
  });

  context('given an empty object', function () {
    specify('should return null', function () {
      const val = {};

      assert.strictEqual(RA.presence(val), null);
    });
  });

  context('given a boolean with value false', function () {
    specify('should return null', function () {
      const val = false;

      assert.strictEqual(RA.presence(val), null);
    });
  });

  context('given a boolean with value true', function () {
    specify('should return boolean true', function () {
      const val = true;

      assert.strictEqual(RA.presence(val), val);
    });
  });

  context('given an empty string', function () {
    specify('should return null', function () {
      const val = '';

      assert.strictEqual(RA.presence(val), null);
    });
  });

  context('given a string', function () {
    specify('should return the correct string', function () {
      const val = 'val';

      assert.strictEqual(RA.presence(val), val);
    });
  });

  context('given an empty array', function () {
    specify('should return null', function () {
      const val = [];

      assert.strictEqual(RA.presence(val), null);
    });
  });

  context('given an array with values', function () {
    specify('should return the array', function () {
      const val = [1, 2, 3];

      assert.strictEqual(RA.presence(val), val);
    });
  });

  context('given an undefined', function () {
    specify('should return null', function () {
      const val = undefined;

      assert.strictEqual(RA.presence(val), null);
    });
  });

  context('given a number', function () {
    specify('should return number', function () {
      const val = 0;

      assert.strictEqual(RA.presence(val), val);
    });
  });

  context('given a null', function () {
    specify('should return null', function () {
      const val = null;

      assert.strictEqual(RA.presence(val), val);
    });
  });
});
