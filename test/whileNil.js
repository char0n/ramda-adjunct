import { assert } from 'chai';
import sinon from 'sinon';
import * as R from 'ramda';

import * as RA from '../src/index';

describe('whileNil', function() {
  it('returns the first non-nil value', function() {
    const fn = RA.whileNil(R.prop('a'), R.prop('b'), R.prop('c'));
    const arg = {
      b: 'foo',
      c: 'bah',
    };
    assert.equal(fn(arg), 'foo');
  });
  it('returns does not call subsequent predicates', function() {
    const spy1 = sinon.spy();
    const spy2 = sinon.stub().returns('foo');
    const spy3 = sinon.spy();
    const spy4 = sinon.spy();
    const fn = RA.whileNil(spy1, spy2, spy3, spy4);

    fn(null);

    assert.isTrue(spy1.called);
    assert.isTrue(spy2.called);
    assert.isFalse(spy3.called);
    assert.isFalse(spy4.called);
  });
  it('falls back to nil', function() {
    const noop = () => {};
    const fn = RA.whileNil(noop, noop);

    assert.notExists(fn('value'));
  });
});
