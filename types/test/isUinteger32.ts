import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isUinteger32(0));
expectType<boolean>(RA.isUinteger32(null));
expectType<boolean>(RA.isUinteger32(true));
expectType<boolean>(RA.isUinteger32(NaN));
expectType<boolean>(RA.isUinteger32({}));
expectType<boolean>(RA.isUinteger32([]));
expectType<boolean>(RA.isUinteger32(() => {}));
expectType<boolean>(RA.isUinteger32('string'));
expectType<boolean>(RA.isUinteger32(1));
expectType<boolean>(RA.isUinteger32(0.1));
expectType<boolean>(RA.isUinteger32(Object(0.1)));
expectType<boolean>(RA.isUinteger32(Infinity));
expectType<boolean>(RA.isUinteger32(Number.MAX_VALUE));
expectType<boolean>(RA.isUinteger32(Number.MIN_VALUE));
