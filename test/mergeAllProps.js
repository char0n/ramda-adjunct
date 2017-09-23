import RA from '../src/index';
import eq from './shared/eq';

describe('mergeAllProps', function() {
  it('does the same as object spread', function() {
    const obj = {
      foo: { fooinner: 1 },
      bar: { barinner: 2 },
    };
    const expected = { fooinner: 1, barinner: 2 };

    // uncurried version
    eq(RA.mergeAllProps(['foo', 'bar'], obj), expected);

    // curried version
    const getFooBar = RA.mergeAllProps(['foo', 'bar']);
    eq(getFooBar(obj), expected);
  });

  it('returns {} if object props are numbers', function() {
    const obj = { foo: 1, bar: 2 };
    const expected = {};
    eq(RA.mergeAllProps(['foo', 'bar'], obj), expected);
  });
});
