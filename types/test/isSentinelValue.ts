import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isSentinelValue(-1));
expectType<boolean>(RA.isSentinelValue(null));
expectType<boolean>(RA.isSentinelValue(true));
expectType<boolean>(RA.isSentinelValue(NaN));
expectType<boolean>(RA.isSentinelValue({}));
expectType<boolean>(RA.isSentinelValue([]));
expectType<boolean>(RA.isSentinelValue(() => {}));
expectType<boolean>(RA.isSentinelValue('-1'));
expectType<boolean>(RA.isSentinelValue(0.1));
expectType<boolean>(RA.isSentinelValue(Object(-1)));
expectType<boolean>(RA.isSentinelValue(Number(-1)));
expectType<boolean>(RA.isSentinelValue(Infinity));
expectType<boolean>(RA.isSentinelValue(Number.MAX_VALUE));
