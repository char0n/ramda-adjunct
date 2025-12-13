import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isIndexed(-0));
expectType<boolean>(RA.isIndexed(+0));
expectType<boolean>(RA.isIndexed(null));
expectType<boolean>(RA.isIndexed(true));
expectType<boolean>(RA.isIndexed(NaN));
expectType<boolean>(RA.isIndexed({}));
expectType<boolean>(RA.isIndexed([]));
expectType<boolean>(RA.isIndexed(() => {}));
expectType<boolean>(RA.isIndexed('string'));
expectType<boolean>(RA.isIndexed(1));
expectType<boolean>(RA.isIndexed(0.1));
expectType<boolean>(RA.isIndexed(Object(0.1)));
expectType<boolean>(RA.isIndexed(NaN));
expectType<boolean>(RA.isIndexed(Infinity));
expectType<boolean>(RA.isIndexed(Number.MAX_VALUE));
expectType<boolean>(RA.isIndexed(Number.MIN_VALUE));
