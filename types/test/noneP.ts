import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';
import { expectType, expectError } from 'tsd';

expectType<Promise<number[]>>(RA.noneP([Promise.resolve(1), 2, RA.resolveP(3)]));
expectType<Promise<number[]>>(RA.noneP([Promise.reject<number>(1)]));
expectType<Promise<string[]>>(RA.noneP(['a', 'b']));
expectType<Promise<(string | number)[]>>(RA.noneP([1, 'a']));
expectType<Promise<never[]>>(RA.noneP([]));
expectType<Promise<number[]>>(RA.noneP(customIterable));
expectType<Promise<string[]>>(RA.noneP('abc'));

expectError(RA.noneP({}));
expectError(RA.noneP(1));
