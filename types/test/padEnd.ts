import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<string>(RA.padEnd(3, 'a'));
expectType<string>(RA.padEnd(5)('abc'));
expectType<string>(RA.padEnd(10, 'hello'));

expectError(RA.padEnd('10', 'afsd'));
expectError(RA.padEnd('12', 54));
expectError(RA.padEnd(null, 'a'));
expectError(RA.padEnd(undefined, 12));
expectError(RA.padEnd(undefined, 'abc'));
