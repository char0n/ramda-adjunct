import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<string>(RA.escapeRegExp('abc'));
expectType<string>(RA.escapeRegExp(''));

expectError(RA.escapeRegExp(new String('')));
expectError(RA.escapeRegExp(1));
expectError(RA.escapeRegExp({}));
expectError(RA.escapeRegExp(null));
expectError(RA.escapeRegExp(undefined));
expectError(RA.escapeRegExp([]));
