import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<number>(RA.toUinteger32(1));
expectType<number>(RA.toUinteger32(-1));
expectType<number>(RA.toUinteger32(Infinity));
expectType<number>(RA.toUinteger32(+Infinity));
expectType<number>(RA.toUinteger32(-Infinity));
expectType<number>(RA.toUinteger32(Number.MAX_VALUE));
expectType<number>(RA.toUinteger32(Number.MIN_VALUE));
expectType<number>(RA.toUinteger32(NaN));

expectType<number>(RA.toUint32(1));
expectType<number>(RA.toUint32(Infinity));
expectType<number>(RA.toUint32(+Infinity));
expectType<number>(RA.toUint32(-Infinity));
expectType<number>(RA.toUint32(Number.MAX_VALUE));
expectType<number>(RA.toUint32(Number.MIN_VALUE));
expectType<number>(RA.toUint32(NaN));

expectError(RA.toUinteger32({}));
expectError(RA.toUinteger32([]));
expectError(RA.toUinteger32('a'));

expectError(RA.toUint32({}));
expectError(RA.toUint32([]));
expectError(RA.toUint32('a'));
