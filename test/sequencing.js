import * as RA from '../src/index';
import eq from './shared/eq';


describe('sequencing', function() {
  it('tests ordered evaluation with nullary functions', function() {
    let foo = 0;

    const assignFoo1 = () => {
      foo = 1;
      return undefined;
    };

    const assignFoo2 = () => {
      foo = 2;
      return undefined;
    };

    eq(RA.sequencing([assignFoo1, assignFoo2])(), undefined);
    eq(foo, 2);
  });

  it('tests ordered evaluation with unary functions', function() {
    let foo = 2;

    const divide = (x) => {
      foo /= x;
      return undefined;
    };

    const multiply = (x) => {
      foo *= x;
      return undefined;
    };

    eq(RA.sequencing([multiply, divide])(3), undefined);
    eq(foo, 2);
  });

  it('tests ordered evaluation with binary functions', function() {
    let foo = 2;
    let bar = 4;

    const divide = (x, y) => {
      foo /= x;
      bar /= y;
      return undefined;
    };

    const multiply = (x, y) => {
      foo *= x;
      bar *= y;
      return undefined;
    };

    eq(RA.sequencing([multiply, divide])(3, 3), undefined);
    eq(foo, 2);
    eq(bar, 4);
  });

  it('tests ordered evaluation with currying', function() {
    let foo = 2;
    let bar = 4;

    const divide = (x, y) => {
      foo /= x;
      bar /= y;
      return undefined;
    };

    const multiply = (x, y) => {
      foo *= x;
      bar *= y;
      return undefined;
    };

    eq(RA.sequencing([multiply, divide])(3)(3), undefined);
    eq(foo, 2);
    eq(bar, 4);
  });
});
