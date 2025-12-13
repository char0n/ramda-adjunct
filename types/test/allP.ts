import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';
import { expectType, expectError } from 'tsd';

expectType<Promise<number[]>>(RA.allP([1, 2]));
expectType<Promise<string[]>>(RA.allP(['a', 'b']));
expectType<Promise<(string | number)[]>>(RA.allP([1, 'a']));
expectType<Promise<never[]>>(RA.allP([]));
expectType<Promise<number[]>>(RA.allP(customIterable));
expectType<Promise<string[]>>(RA.allP('abc'));

expectError(RA.allP({}));
expectError(RA.allP(1));
