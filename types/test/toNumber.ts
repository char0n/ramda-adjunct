import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<number>(RA.toNumber([1, 2, 3]));
expectType<number>(RA.toNumber(null));
expectType<number>(RA.toNumber(undefined));
expectType<number>(RA.toNumber(1));
expectType<number>(RA.toNumber({}));
expectType<number>(RA.toNumber(() => {}));
expectType<number>(RA.toNumber('1'));
expectType<number>(RA.toNumber(Object.create(null)));
expectType<number>(RA.toNumber(Symbol.for('')));
