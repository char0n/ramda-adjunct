import * as RA from '../src/index';
import eq from './shared/eq';


describe('mergePaths', function () {
  let obj;
  let expected;

  beforeEach(function () {
    obj = {
      foo: { fooinner: { fooinner2: 1 } },
      bar: { barinner: 2 },
    };
    expected = { fooinner2: 1, barinner: 2 };
  });

  it('tests currying', function () {
    eq(RA.mergePaths([['foo', 'fooinner'], ['bar']], obj), expected);
    eq(RA.mergePaths([['foo', 'fooinner'], ['bar']])(obj), expected);
  });

  it('tests merging the property paths containing object', function () {
    eq(RA.mergePaths([['foo', 'fooinner'], ['bar']], obj), expected);
  });

  it('tests merging the property paths containing non-objects', function () {
    eq(RA.mergePaths([['foo', 'fooinner'], ['bar']], { foo: { fooinner: 1 }, bar: 2 }), {});
    eq(RA.mergePaths([['foo', 'fooinner'], ['bar']], { foo: { fooinner: 'a' }, bar: 'b' }), { 0: 'b' });
    eq(RA.mergePaths([['foo', 'fooinner'], ['bar']], { foo: { fooinner: null }, bar: undefined }), {});
  });

  it('tests if no paths requested', function () {
    eq(RA.mergePaths([], obj), {});
  });
});
