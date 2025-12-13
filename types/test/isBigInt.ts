import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isBigInt(3));
expectType<boolean>(RA.isBigInt(2 ** 53));
expectType<boolean>(RA.isBigInt(2 ** 53 - 1));
expectType<boolean>(RA.isBigInt(NaN));
expectType<boolean>(RA.isBigInt(Infinity));
expectType<boolean>(RA.isBigInt('3'));
expectType<boolean>(RA.isBigInt(3.1));
expectType<boolean>(RA.isBigInt(3.0));
expectType<boolean>(RA.isBigInt('string'));
expectType<boolean>(RA.isBigInt(null));
expectType<boolean>(RA.isBigInt(undefined));
expectType<boolean>(RA.isBigInt({}));
expectType<boolean>(RA.isBigInt(() => {}));
expectType<boolean>(RA.isBigInt(true));
