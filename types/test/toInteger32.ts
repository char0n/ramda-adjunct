import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<number>(RA.toInteger32(1));
expectType<number>(RA.toInteger32(Infinity));
expectType<number>(RA.toInteger32(-Infinity));
expectType<number>(RA.toInteger32(+Infinity));
expectType<number>(RA.toInteger32(NaN));
expectError(RA.toInteger32({}));
expectError(RA.toInteger32('s'));
expectError(RA.toInteger32([]));

expectType<number>(RA.toInt32(1));
expectError(RA.toInt32('s'));
