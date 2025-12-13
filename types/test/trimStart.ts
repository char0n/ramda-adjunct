import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<string>(RA.trimStart('abc'));
expectType<string>(RA.trimStart(''));

expectError(RA.trimStart(1));
expectError(RA.trimStart({}));
expectError(RA.trimStart(null));
expectError(RA.trimStart(undefined));
expectError(RA.trimStart([]));

// alias
expectType<string>(RA.trimLeft('abc'));
expectType<string>(RA.trimLeft(''));

expectError(RA.trimLeft(1));
expectError(RA.trimLeft({}));
expectError(RA.trimLeft(null));
expectError(RA.trimLeft(undefined));
expectError(RA.trimLeft([]));
