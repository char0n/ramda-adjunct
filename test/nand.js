import * as R from 'ramda';
import eq from './shared/eq';
import { nand } from '../src';

describe('nand', () => {
  it('compared two values with nand', () => {
    eq(nand(true, true), false);
    eq(nand(false, true), true);
    eq(nand(true, false), true);
    eq(nand(false, false), true);
    eq(nand(1.0, 1.0), false);
    eq(nand(0.0, 1.0), true);
    eq(nand(1.0, 0.0), true);
    eq(nand(0.0, 0.0), true);
  });
});