import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';
import { expectType, expectError } from 'tsd';

expectType<Promise<number>>(RA.anyP([1, 2]));
expectType<Promise<string>>(RA.anyP(['a', 'b']));
expectType<Promise<string | number>>(RA.anyP([1, 'a']));
expectType<Promise<never>>(RA.anyP([]));
expectType<Promise<number>>(RA.anyP(customIterable));

expectError(RA.anyP({}));
expectError(RA.anyP(1));

// alias
expectType<Promise<number>>(RA.firstP([1, 2]));
expectType<Promise<string>>(RA.firstP(['a', 'b']));
expectType<Promise<string | number>>(RA.firstP([1, 'a']));
expectType<Promise<never>>(RA.firstP([]));
expectType<Promise<number>>(RA.firstP(customIterable));

expectError(RA.firstP({}));
expectError(RA.firstP(1));
