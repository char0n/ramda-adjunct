import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isPositiveZero(+0));
expectType<boolean>(RA.isPositiveZero(-0));
expectType<boolean>(RA.isPositiveZero(null));
expectType<boolean>(RA.isPositiveZero(true));
expectType<boolean>(RA.isPositiveZero(NaN));
expectType<boolean>(RA.isPositiveZero({}));
expectType<boolean>(RA.isPositiveZero([]));
expectType<boolean>(RA.isPositiveZero(() => {}));
expectType<boolean>(RA.isPositiveZero('string'));
expectType<boolean>(RA.isPositiveZero(1));
expectType<boolean>(RA.isPositiveZero(0.1));
expectType<boolean>(RA.isPositiveZero(Object(0.1)));
expectType<boolean>(RA.isPositiveZero(NaN));
expectType<boolean>(RA.isPositiveZero(Infinity));
expectType<boolean>(RA.isPositiveZero(Number.MAX_VALUE));
expectType<boolean>(RA.isPositiveZero(Number.MIN_VALUE));
