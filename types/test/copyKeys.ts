import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<object>(RA.copyKeys({ a: 'b' }, { a: true }));
expectType<object>(RA.copyKeys({ a: 'b' }, { a: true, b: false }));
expectType<object>(RA.copyKeys({ a: 'b' })({ a: true }));

expectError(RA.copyKeys()());
expectError(RA.copyKeys());
expectError(RA.copyKeys(1, {}));
expectError(RA.copyKeys(null, {}));
expectError(RA.copyKeys({}, ''));
