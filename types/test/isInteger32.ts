import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isInteger32(0));
expectType<boolean>(RA.isInteger32(null));
expectType<boolean>(RA.isInteger32(true));
expectType<boolean>(RA.isInteger32(NaN));
expectType<boolean>(RA.isInteger32({}));
expectType<boolean>(RA.isInteger32([]));
expectType<boolean>(RA.isInteger32(() => {}));
expectType<boolean>(RA.isInteger32('string'));
expectType<boolean>(RA.isInteger32(1));
expectType<boolean>(RA.isInteger32(0.1));
expectType<boolean>(RA.isInteger32(Object(0.1)));
expectType<boolean>(RA.isInteger32(Infinity));
expectType<boolean>(RA.isInteger32(Number.MAX_VALUE));
expectType<boolean>(RA.isInteger32(Number.MIN_VALUE));
