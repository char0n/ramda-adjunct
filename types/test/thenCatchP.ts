import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

const always =
  <A>(x: A) =>
  () =>
    x;
const add1 = (x: number) => x + 1;

const promise = Promise.resolve(1);

expectType<Promise<string | number>>(RA.thenCatchP(add1, always('a'), promise));
expectType<Promise<string | number>>(RA.thenCatchP<number, string>(add1, always('a'))(promise));
expectType<Promise<string | number>>(RA.thenCatchP<number, string>(add1)(always('a'))(promise));
