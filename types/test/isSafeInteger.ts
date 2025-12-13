import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isSafeInteger(3));
expectType<boolean>(RA.isSafeInteger(2 ** 53));
expectType<boolean>(RA.isSafeInteger(2 ** 53 - 1));
expectType<boolean>(RA.isSafeInteger(NaN));
expectType<boolean>(RA.isSafeInteger(Infinity));
expectType<boolean>(RA.isSafeInteger('3'));
expectType<boolean>(RA.isSafeInteger(3.1));
expectType<boolean>(RA.isSafeInteger(3.0));
expectType<boolean>(RA.isSafeInteger('string'));
expectType<boolean>(RA.isSafeInteger(null));
expectType<boolean>(RA.isSafeInteger(undefined));
expectType<boolean>(RA.isSafeInteger({}));
expectType<boolean>(RA.isSafeInteger(() => {}));
expectType<boolean>(RA.isSafeInteger(true));
