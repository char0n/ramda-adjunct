import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';
import { expectType, expectError } from 'tsd';

expectType<Promise<number>>(RA.lastP([1, 2]));
expectType<Promise<string>>(RA.lastP(['a', 'b']));
expectType<Promise<string | number>>(RA.lastP([1, 'a']));
expectType<Promise<never>>(RA.lastP([]));
expectType<Promise<number>>(RA.lastP(customIterable));

expectError(RA.lastP({}));
expectError(RA.lastP(1));
