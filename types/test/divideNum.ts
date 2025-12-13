import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<number>(RA.divideNum(2, 1));
expectType<number>(RA.divideNum(2.0, 1.0));
expectType<number>(RA.divideNum(0, 2.0));
expectType<number>(RA.divideNum(0.0, 2.0));
expectType<number>(RA.divideNum(-0.0, 2.0));

expectType<number>(RA.divideNum(2)(1));
expectType<number>(RA.divideNum(2.0)(1.0));
expectType<number>(RA.divideNum(0)(2.0));
expectType<number>(RA.divideNum(0.0)(2.0));
expectType<number>(RA.divideNum(-0.0)(2.0));

expectError(RA.divideNum('a', 'b'));
expectError(RA.divideNum('a')('b'));
expectError(RA.divideNum(1, undefined));
expectError(RA.divideNum(1)(undefined));
expectError(RA.divideNum(1, {}));
expectError(RA.divideNum(1)({}));
expectError(RA.divideNum({}, 1));
expectError(RA.divideNum({})(1));
