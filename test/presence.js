import { assert } from 'chai';

import * as RA from '../src';

describe.only('presence', function () {
  context('given an object', function () {
    specify('should return the object', function () {
      const foo = { foo: 'foo' };

      assert.strictEqual(RA.presence(foo), foo);
    });
  });

  context('given an empty object', function () {
    specify('should return null', function () {
      const foo = {};

      assert.strictEqual(RA.presence(foo), null);
    });
  });

  context('given a boolean with value false', function () {
    specify('should return null', function () {
      const foo = false;

      assert.strictEqual(RA.presence(foo), null);
    });
  });

  context('given a boolean with value true', function () {
    specify('should return boolean true', function () {
      const foo = true;

      assert.strictEqual(RA.presence(foo), foo);
    });
  });

  context('given an empty string', function () {
    specify('should return null', function () {
      const foo = '';

      assert.strictEqual(RA.presence(foo), null);
    });
  });

  context('given a string', function () {
    specify('should return the correct string', function () {
      const foo = 'foo';

      assert.strictEqual(RA.presence(foo), foo);
    });
  });

  context('given an empty array', function () {
    specify('should return null', function () {
      const foo = [];

      assert.strictEqual(RA.presence(foo), null);
    });
  });

  context('given an array with values', function () {
    specify('should return the array', function () {
      const foo = [1, 2, 3];

      assert.strictEqual(RA.presence(foo), foo);
    });
  });

  context('given an undefined', function () {
    specify('should return null', function () {
      const foo = undefined;

      assert.strictEqual(RA.presence(foo), null);
    });
  });

  context('given a number', function () {
    specify('should return number', function () {
      const foo = 0;

      assert.strictEqual(RA.presence(foo), foo);
    });
  });

  context('given a null', function () {
    specify('should return null', function () {
      const foo = null;

      assert.strictEqual(RA.presence(foo), foo);
    });
  });
});
