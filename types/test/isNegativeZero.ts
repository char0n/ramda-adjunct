import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isNegativeZero(-0));
expectType<boolean>(RA.isNegativeZero(+0));
expectType<boolean>(RA.isNegativeZero(null));
expectType<boolean>(RA.isNegativeZero(true));
expectType<boolean>(RA.isNegativeZero(NaN));
expectType<boolean>(RA.isNegativeZero({}));
expectType<boolean>(RA.isNegativeZero([]));
expectType<boolean>(RA.isNegativeZero(() => {}));
expectType<boolean>(RA.isNegativeZero('string'));
expectType<boolean>(RA.isNegativeZero(1));
expectType<boolean>(RA.isNegativeZero(0.1));
expectType<boolean>(RA.isNegativeZero(Object(0.1)));
expectType<boolean>(RA.isNegativeZero(NaN));
expectType<boolean>(RA.isNegativeZero(Infinity));
expectType<boolean>(RA.isNegativeZero(Number.MAX_VALUE));
expectType<boolean>(RA.isNegativeZero(Number.MIN_VALUE));
