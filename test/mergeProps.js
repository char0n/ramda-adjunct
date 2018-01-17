import * as RA from '../src/index';
import eq from './shared/eq';


describe('mergeProps', function () {
  let obj;
  let expected;

  beforeEach(function () {
    obj = {
      foo: { fooinner: 1 },
      bar: { barinner: 2 },
    };
    expected = { fooinner: 1, barinner: 2 };
  });

  it('tests currying', function () {
    eq(RA.mergeProps(['foo', 'bar'], obj), expected);
    eq(RA.mergeProps(['foo', 'bar'])(obj), expected);
  });

  it('tests merging the props containing objects', function () {
    eq(RA.mergeProps(['foo', 'bar'], obj), expected);
  });

  it('tests merging the props containing non-objects', function () {
    eq(RA.mergeProps(['foo', 'bar'], { foo: 1, bar: 2 }), {});
    eq(RA.mergeProps(['foo', 'bar'], { foo: 'a', bar: 'b' }), { 0: 'b' });
    eq(RA.mergeProps(['foo', 'bar'], { foo: null, bar: undefined }), {});
  });

  it('tests if no props requested', function () {
    eq(RA.mergeProps([], { foo: 1, bar: 2 }), {});
  });
});
