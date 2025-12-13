import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

const fn = (v: unknown) => v;

expectType<Function>(RA.fnull(fn)(['abc']));
expectType<Function>(RA.fnull(fn, ['a']));
expectType<Function>(RA.fnull(fn, ['hello']));

expectError(RA.fnull(fn, 'afsd'));
expectError(RA.fnull('12', 54));
expectError(RA.fnull(null, 'a'));
expectError(RA.fnull(undefined, 12));
expectError(RA.fnull(undefined, 'abc'));
