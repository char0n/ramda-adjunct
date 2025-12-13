import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<number[] | undefined>(RA.concatAll([[1], [2], [3]]));
expectType<undefined>(RA.concatAll([]));

expectError(RA.concatAll(1));
expectError(RA.concatAll({}));
expectError(RA.concatAll([1]));
