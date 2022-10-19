import * as RA from 'ramda-adjunct';

const always =
  <A>(x: A) =>
  () =>
    x;

const promise = RA.rejectP(1);

RA.catchP(always('a'), promise); // $ExpectType Promise<string | number>
RA.catchP<number, string>(always('a'))(promise); // $ExpectType Promise<string | number>
RA.catchP<number, string>(always('a'))(promise); // $ExpectType Promise<string | number>
