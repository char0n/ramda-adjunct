import * as RA from 'ramda-adjunct';
import type { SettledPromise } from 'ramda-adjunct';

import { customIterable } from './helpers';
import { expectType, expectError } from 'tsd';

expectType<Promise<SettledPromise<number>[]>>(RA.allSettledP([1, 2]));
expectType<Promise<SettledPromise<string>[]>>(RA.allSettledP(['a', 'b']));
expectType<Promise<SettledPromise<string | number>[]>>(RA.allSettledP([1, 'a']));
expectType<Promise<SettledPromise<never>[]>>(RA.allSettledP([]));
expectType<Promise<SettledPromise<number>[]>>(RA.allSettledP(customIterable));
expectType<Promise<SettledPromise<string>[]>>(RA.allSettledP('abc'));

expectError(RA.allSettledP({}));
expectError(RA.allSettledP(1));
