import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

const always =
  <A>(x: A) =>
  () =>
    x;

const promise = RA.rejectP(1);

expectType<Promise<string | number>>(RA.catchP(always('a'), promise));
expectType<Promise<string | number>>(RA.catchP<number, string>(always('a'))(promise));
expectType<Promise<string | number>>(RA.catchP<number, string>(always('a'))(promise));
