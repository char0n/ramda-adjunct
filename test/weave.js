import { sum, curry } from 'ramda';
import { Reader as reader } from 'monet';

import RA from '../src/index';
import eq from './shared/eq';


describe('weave', function() {
  const unaryReader = a => reader(config => config + a);
  const binaryReader = (a, b) => reader(config => config + a + b);
  const variadicReader = (...args) => reader(config => sum(args) + config);
  const mixedReader = (a, b, ...args) => reader(config => sum(args.concat(a, b, config)));

  it('tests weaving', function() {
    const wunaryReader = RA.weave(unaryReader, 1);
    const wbinaryReader = RA.weave(binaryReader, 1);

    eq(wunaryReader(1), 2);
    eq(wbinaryReader(2, 3), 6);
  });

  it('tests currying', function() {
    const wbinaryReader1 = RA.weave(binaryReader, 1);
    const wbinaryReader2 = RA.weave(binaryReader)(1);

    eq(wbinaryReader1(2, 3), 6);
    eq(wbinaryReader2(2, 3), 6);
  });

  it('tests auto-curring on fixed function signature', function() {
    const wbinaryReader = RA.weave(binaryReader, 1);

    eq(wbinaryReader(2, 3), 6);
    eq(wbinaryReader(2)(3), 6);
  });

  it('tests auto-curring on curried fixed function signature', function() {
    const wbinaryReader = RA.weave(curry(binaryReader), 1);

    eq(wbinaryReader(2, 3), 6);
    eq(wbinaryReader(2)(3), 6);
  });

  it('tests auto-curring on variadic function signature', function() {
    const wvariadicReader = RA.weave(variadicReader, 1);

    eq(wvariadicReader(1, 2, 3), 7);
  });

  it('tests auto-curring on curried variadic function signature', function() {
    const wvariadicReader = RA.weave(curry(variadicReader), 1);

    eq(wvariadicReader(1, 2, 3), 7);
  });

  it('tests auto-curring on mixed function signature', function() {
    const wmixedReader = RA.weave(mixedReader, 1);

    eq(wmixedReader(2, 3, 4), 10);
    eq(wmixedReader(2)(3, 4), 10);
  });

  it('tests auto-curring on curried mixed function signature', function() {
    const wmixedReader = RA.weave(curry(mixedReader), 1);

    eq(wmixedReader(2, 3, 4), 10);
    eq(wmixedReader(2)(3, 4), 10);
  });
});
