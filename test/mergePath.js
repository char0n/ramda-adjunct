import chai from 'chai';

import RA from '../src/index';
import eq from './shared/eq';


describe('mergePath', function() {
  let path;
  let subj;
  let obj;
  let expected;

  beforeEach(function() {
    path = ['a', 'b'];
    subj = { c2: 22, c3: 33 };
    obj = { a: { b: { c1: 1, c2: 2 } } };
    expected = { a: { b: { c1: 1, c2: 22, c3: 33 } } };
  });

  it('tests currying', function () {
    eq(RA.mergePath(path, subj, obj), expected);
    eq(RA.mergePath(path)(subj, obj), expected);
    eq(RA.mergePath(path, subj)(obj), expected);
    eq(RA.mergePath(path)(subj)(obj), expected);
  });

  it('tests merging the property paths containing object', function() {
    eq(RA.mergePath(path, subj, obj), expected);
  });

  it('returns unmodified object when subj empty', function () {
    eq(RA.mergePath(path, {}, obj), obj);
  });

  it('creates object with subject under path when obj empty', function () {
    expected = { a: { b: { c2: 22, c3: 33 } } };
    eq(RA.mergePath(path, subj, {}), expected);
  });

  it('creates object with subject under path when target is not object', function () {
    expected = { a: { b: { c2: 22, c3: 33 } } };
    eq(RA.mergePath(path, subj, { a: { b: 1 } }), expected);
  });
});
