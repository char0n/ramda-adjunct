import * as RA from '../src';
import eq from './shared/eq';

describe('mergeProp', function() {
  let prop;
  let source;
  let obj;
  let expected;

  beforeEach(function() {
    prop = 'a';
    source = { c2: 22, c3: 33 };
    obj = { a: { c1: 1, c2: 2 } };
    expected = { a: { c1: 1, c2: 22, c3: 33 } };
  });

  it('should curry', function() {
    eq(RA.mergeProp(prop, source, obj), expected);
    eq(RA.mergeProp(prop)(source, obj), expected);
    eq(RA.mergeProp(prop, source)(obj), expected);
    eq(RA.mergeProp(prop)(source)(obj), expected);
  });

  it('tests merging the property paths containing object', function() {
    eq(RA.mergeProp(prop, source, obj), expected);
  });

  context('given source is empty', function() {
    specify('should return unmodified object', function() {
      eq(RA.mergeProp(prop, {}, obj), obj);
    });
  });

  context('given obj is empty', function() {
    specify('should create object with subject under prop', function() {
      expected = { a: { c2: 22, c3: 33 } };
      eq(RA.mergeProp(prop, source, {}), expected);
    });
  });

  context('given target is not an object', function() {
    specify('should create object with subject under prop', function() {
      expected = { a: { c2: 22, c3: 33 } };
      eq(RA.mergeProp(prop, source, { a: 1 }), expected);
    });
  });
});
