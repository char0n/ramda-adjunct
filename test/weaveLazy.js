import { sum, curry, always } from 'ramda';
import { Reader as reader } from 'monet';

import * as RA from '../src';
import eq from './shared/eq';

describe('weaveLazy', function() {
  const unaryReader = a => reader(config => config + a);
  const binaryReader = (a, b) => reader(config => config + a + b);
  const variadicReader = (...args) => reader(config => sum(args) + config);
  const mixedReader = (a, b, ...args) =>
    reader(config => sum(args.concat(a, b, config)));

  it('tests weaving', function() {
    const wunaryReader = RA.weaveLazy(unaryReader, always(1));
    const wbinaryReader = RA.weaveLazy(binaryReader, always(1));

    eq(wunaryReader(1), 2);
    eq(wbinaryReader(2, 3), 6);
  });

  it('tests currying', function() {
    const wbinaryReader1 = RA.weaveLazy(binaryReader, always(1));
    const wbinaryReader2 = RA.weaveLazy(binaryReader)(always(1));

    eq(wbinaryReader1(2, 3), 6);
    eq(wbinaryReader2(2, 3), 6);
  });

  it('tests auto-currying on fixed function signature', function() {
    const wbinaryReader = RA.weaveLazy(binaryReader, always(1));

    eq(wbinaryReader(2, 3), 6);
    eq(wbinaryReader(2)(3), 6);
  });

  it('tests auto-currying on curried fixed function signature', function() {
    const wbinaryReader = RA.weaveLazy(curry(binaryReader), always(1));

    eq(wbinaryReader(2, 3), 6);
    eq(wbinaryReader(2)(3), 6);
  });

  it('tests auto-currying on variadic function signature', function() {
    const wvariadicReader = RA.weaveLazy(variadicReader, always(1));

    eq(wvariadicReader(1, 2, 3), 7);
  });

  it('tests auto-currying on curried variadic function signature', function() {
    const wvariadicReader = RA.weaveLazy(curry(variadicReader), always(1));

    eq(wvariadicReader(1, 2, 3), 7);
  });

  it('tests auto-currying on mixed function signature', function() {
    const wmixedReader = RA.weaveLazy(mixedReader, always(1));

    eq(wmixedReader(2, 3, 4), 10);
    eq(wmixedReader(2)(3, 4), 10);
  });

  it('tests auto-currying on curried mixed function signature', function() {
    const wmixedReader = RA.weaveLazy(curry(mixedReader), always(1));

    eq(wmixedReader(2, 3, 4), 10);
    eq(wmixedReader(2)(3, 4), 10);
  });
});
