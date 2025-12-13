import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<string>(RA.padCharsEnd('-', 3, 'a'));
expectType<string>(RA.padCharsEnd('$', 5)('abc'));
expectType<string>(RA.padCharsEnd('*')(10, 'hello'));

expectError(RA.padCharsEnd(1, 2, '3'));
expectError(RA.padCharsEnd('#', '10', 'afsd'));
expectError(RA.padCharsEnd(undefined, '12', 54));
expectError(RA.padCharsEnd(null, 12, 'hello'));
