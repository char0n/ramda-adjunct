/* eslint-disable no-prototype-builtins */
import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('isPrototypeOf', function () {
  context(
    'given an object and another object in its prototype chain',
    function () {
      specify('should return true', function () {
        assert.isTrue(RA.isPrototypeOf(Array, []));
        assert.isTrue(RA.isPrototypeOf(Object, {}));
        assert.isTrue(RA.isPrototypeOf(Object, []));
        assert.isTrue(RA.isPrototypeOf(Function, () => {}));
        assert.isTrue(RA.isPrototypeOf(Object, () => {}));
        assert.isTrue(RA.isPrototypeOf(RegExp, /my regex/gi));

        function Foo() {}
        function Bar() {}
        function Baz() {}

        Bar.prototype = Object.create(Foo.prototype);
        Baz.prototype = Object.create(Bar.prototype);

        const baz = new Baz();

        assert.isTrue(RA.isPrototypeOf(Baz, baz));
        assert.isTrue(RA.isPrototypeOf(Bar, baz));
        assert.isTrue(RA.isPrototypeOf(Foo, baz));
        assert.isTrue(RA.isPrototypeOf(Object, baz));
      });
    }
  );

  context('given an object and another unrelated object', function () {
    specify('should return false', function () {
      assert.isFalse(RA.isPrototypeOf(Array, {}));
      assert.isFalse(RA.isPrototypeOf(Array, () => {}));
      assert.isFalse(RA.isPrototypeOf(Function, /my regex/gi));
      assert.isFalse(RA.isPrototypeOf(Array, /my regex/gi));
      assert.isFalse(RA.isPrototypeOf(RegExp, () => {}));

      function Foo() {}
      function Bar() {}
      function Baz() {}

      Baz.prototype = Object.create(Bar.prototype);

      const baz = new Baz();
      const bar = new Bar();
      const foo = new Foo();

      assert.isFalse(RA.isPrototypeOf(Foo, baz));
      assert.isFalse(RA.isPrototypeOf(Bar, foo));
      assert.isFalse(RA.isPrototypeOf(Baz, foo));
      assert.isFalse(RA.isPrototypeOf(Baz, bar));
    });
  });

  it('should support currying', function () {
    const isArray = RA.isPrototypeOf(Array);

    assert.isTrue(isArray([]));
    assert.isFalse(isArray(() => {}));
  });

  it('should support placeholder to specify "gaps"', function () {
    let isPrototypeOf = RA.isPrototypeOf(R.__, []);

    assert.isTrue(isPrototypeOf(Array));
    assert.isFalse(isPrototypeOf(Function));

    isPrototypeOf = RA.isPrototypeOf(Array, R.__);

    assert.isTrue(isPrototypeOf([]));
    assert.isFalse(isPrototypeOf(() => {}));
  });
});
