import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<number>(RA.ceil(0.95));
expectType<number>(RA.ceil(4));
expectType<number>(RA.ceil(7.004));
expectType<number>(RA.ceil(-0.95));
expectType<number>(RA.ceil(-4));
expectType<number>(RA.ceil(-7.004));

expectError(RA.ceil(null));
expectError(RA.ceil(undefined));
expectError(RA.ceil('a'));
