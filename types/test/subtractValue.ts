import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<number>(RA.subtractNum(3, 5));
expectType<number>(RA.subtractNum(5, 3));

expectType<number>(RA.subtractNum(3)(5));
expectType<number>(RA.subtractNum(5)(3));

expectError(RA.subtractNum('a', 'b'));
expectError(RA.subtractNum('a')('b'));
expectError(RA.subtractNum(1, undefined));
expectError(RA.subtractNum(1)(undefined));
expectError(RA.subtractNum(1, {}));
expectError(RA.subtractNum(1)({}));
expectError(RA.subtractNum({}, 1));
expectError(RA.subtractNum({})(1));
