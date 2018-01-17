import * as RA from '../src/index';
import eq from './shared/eq';


describe('mergeProp', function () {
  let prop;
  let source;
  let obj;
  let expected;

  beforeEach(function () {
    prop = 'a';
    source = { c2: 22, c3: 33 };
    obj = { a: { c1: 1, c2: 2 } };
    expected = { a: { c1: 1, c2: 22, c3: 33 } };
  });

  it('tests currying', function () {
    eq(RA.mergeProp(prop, source, obj), expected);
    eq(RA.mergeProp(prop)(source, obj), expected);
    eq(RA.mergeProp(prop, source)(obj), expected);
    eq(RA.mergeProp(prop)(source)(obj), expected);
  });

  it('tests merging the property paths containing object', function () {
    eq(RA.mergeProp(prop, source, obj), expected);
  });

  it('returns unmodified object when source empty', function () {
    eq(RA.mergeProp(prop, {}, obj), obj);
  });

  it('creates object with subject under prop when obj empty', function () {
    expected = { a: { c2: 22, c3: 33 } };
    eq(RA.mergeProp(prop, source, {}), expected);
  });

  it('creates object with subject under prop when target is not object', function () {
    expected = { a: { c2: 22, c3: 33 } };
    eq(RA.mergeProp(prop, source, { a: 1 }), expected);
  });
});
