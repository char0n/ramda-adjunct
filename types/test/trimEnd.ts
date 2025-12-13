import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<string>(RA.trimEnd('abc'));
expectType<string>(RA.trimEnd(''));

expectError(RA.trimEnd(1));
expectError(RA.trimEnd({}));
expectError(RA.trimEnd(null));
expectError(RA.trimEnd(undefined));
expectError(RA.trimEnd([]));

// alias
expectType<string>(RA.trimRight('abc'));
expectType<string>(RA.trimRight(''));

expectError(RA.trimRight(1));
expectError(RA.trimRight({}));
expectError(RA.trimRight(null));
expectError(RA.trimRight(undefined));
expectError(RA.trimRight([]));
