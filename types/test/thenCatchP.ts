import * as RA from 'ramda-adjunct';

const always =
  <A>(x: A) =>
  () =>
    x;
const add1 = (x: number) => x + 1;

const promise = Promise.resolve(1);

RA.thenCatchP(add1, always('a'), promise); // $ExpectType Promise<string | number>
RA.thenCatchP<number, string>(add1, always('a'))(promise); // $ExpectType Promise<string | number>
RA.thenCatchP<number, string>(add1)(always('a'))(promise); // $ExpectType Promise<string | number>
