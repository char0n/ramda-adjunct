import { lensIndex, lensProp } from 'ramda';
import RA from '../src/index';
import eq from './shared/eq';

describe('viewOr', function () {
  it('tests "view" through lens with fallback to default value', function () {
    eq(RA.viewOr('foo', lensProp('bar'), {}), 'foo');
    eq(RA.viewOr('foo', lensProp('bar'), { bar: 'foobar' }), 'foobar');

    eq(RA.viewOr('foo', lensProp('bar'), { bar: undefined }), 'foo');
    eq(RA.viewOr('foo', lensProp('bar'), { bar: null }), 'foo');
    eq(RA.viewOr('foo', lensProp('bar'), { bar: false }), false);

    eq(RA.viewOr('foo', lensIndex(11), []), 'foo');
    eq(RA.viewOr('foo', lensIndex(11), {}), 'foo');
  });
});
