import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<number[]>(RA.skipTake(2, [1, 2, 3, 4]));
expectType<number[]>(RA.skipTake<number>(2)([1, 2, 3, 4]));
expectType<number[]>(RA.skipTake<number>(2)([1, 2, 3, 4]));

expectError(RA.skipTake(0, 'asd'));
expectError(RA.skipTake('12', []));
expectError(RA.skipTake(null, []));
expectError(RA.skipTake(undefined, []));
expectError(RA.skipTake(undefined, []));
