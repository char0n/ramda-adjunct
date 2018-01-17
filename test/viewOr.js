import { lensIndex, lensProp } from 'ramda';

import * as RA from '../src/index';
import eq from './shared/eq';


describe('viewOr', function () {
  it('tests "view"', function () {
    eq(RA.viewOr('foo', lensProp('bar'), { bar: 'foobar' }), 'foobar');
    eq(RA.viewOr('foo', lensProp('bar'), { bar: false }), false);
    eq(RA.viewOr('foo', lensProp('bar'), { bar: 1 }), 1);
  });

  it('tests found "view" with default value fallback', function () {
    eq(RA.viewOr('foo', lensProp('bar'), { bar: undefined }), 'foo');
    eq(RA.viewOr('foo', lensProp('bar'), { bar: null }), 'foo');
    eq(RA.viewOr('foo', lensProp('bar'), { bar: NaN }), 'foo');
  });

  it('tests default value', function () {
    eq(RA.viewOr('foo', lensProp('bar'), {}), 'foo');
    eq(RA.viewOr('foo', lensIndex(11), []), 'foo');
    eq(RA.viewOr('foo', lensIndex(11), {}), 'foo');
  });

  it('tests currying', function () {
    eq(RA.viewOr('foo')(lensProp('bar'))({}), 'foo');
    eq(RA.viewOr('foo', lensProp('bar'))({}), 'foo');
    eq(RA.viewOr('foo')(lensProp('bar'), {}), 'foo');
  });
});
