import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<string>(RA.padCharsStart('-', 3, 'a'));
expectType<string>(RA.padCharsStart('$', 5)('abc'));
expectType<string>(RA.padCharsStart('*')(10, 'hello'));

expectError(RA.padCharsStart(1, 2, '3'));
expectError(RA.padCharsStart('#', '10', 'afsd'));
expectError(RA.padCharsStart(undefined, '12', 54));
expectError(RA.padCharsStart(null, 12, 'hello'));
