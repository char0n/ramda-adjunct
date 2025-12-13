import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<any[]>(RA.toArray([1, 2, 3]));
expectType<any[]>(RA.toArray(null));
expectType<any[]>(RA.toArray(undefined));
expectType<any[]>(RA.toArray(1));
expectType<any[]>(RA.toArray({}));
