import { curryN } from 'ramda';
import { Reader as reader } from 'monet';

import RA from '../src/index';
import eq from './shared/eq';


describe('weave', function() {
  const unaryReader = a => reader(config => config + a);
  const binaryReader = (a, b) => reader(config => config + a + b);

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

  it('tests curried weaving', function() {
    const wbinaryReader = curryN(2, RA.weave(binaryReader, 1));

    eq(wbinaryReader(2, 3), 6);
    eq(wbinaryReader(2)(3), 6);
  });
});
