import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<string>(RA.padStart(3, 'a'));
expectType<string>(RA.padStart(5)('abc'));
expectType<string>(RA.padStart(10, 'hello'));

expectError(RA.padStart('10', 'afsd'));
expectError(RA.padStart('12', 54));
expectError(RA.padStart(null, 'a'));
expectError(RA.padStart(undefined, 12));
expectError(RA.padStart(undefined, 'abc'));
