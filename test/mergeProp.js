import RA from '../src/index';
import eq from './shared/eq';


describe('mergeProp', function() {
  let prop;
  let subj;
  let obj;
  let expected;

  beforeEach(function() {
    prop = 'a';
    subj = { c2: 22, c3: 33 };
    obj = { a: { c1: 1, c2: 2 } };
    expected = { a: { c1: 1, c2: 22, c3: 33 } };
  });

  it('tests currying', function () {
    eq(RA.mergeProp(prop, subj, obj), expected);
    eq(RA.mergeProp(prop)(subj, obj), expected);
    eq(RA.mergeProp(prop, subj)(obj), expected);
    eq(RA.mergeProp(prop)(subj)(obj), expected);
  });

  it('tests merging the property paths containing object', function() {
    eq(RA.mergeProp(prop, subj, obj), expected);
  });

  it('returns object with null prop if prop is null', function() {
    expected = { a: { c1: 1, c2: 2 }, null: { c2: 22, c3: 33 } };
    eq(RA.mergeProp(null, subj, obj), expected);
  });

  it('returns unmodified object when subj empty or null', function () {
    eq(RA.mergeProp(prop, null, obj), obj);
    eq(RA.mergeProp(prop, {}, obj), obj);
  });

  it('creates object with subject under prop when obj empty', function () {
    expected = { a: { c2: 22, c3: 33 } };
    eq(RA.mergeProp(prop, subj, null), expected);
    eq(RA.mergeProp(prop, subj, {}), expected);
  });

  it('creates object with subject under prop when target is not object', function () {
    expected = { a: { c2: 22, c3: 33 } };
    eq(RA.mergeProp(prop, subj, { a: null }), expected);
    eq(RA.mergeProp(prop, subj, { a: 1 }), expected);
  });
});
