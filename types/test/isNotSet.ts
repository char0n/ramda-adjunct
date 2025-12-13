import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isNotSet(new Set()));
expectType<boolean>(RA.isNotSet(new Set([1, 2])));
expectType<boolean>(RA.isNotSet(+0));
expectType<boolean>(RA.isNotSet(null));
expectType<boolean>(RA.isNotSet(true));
expectType<boolean>(RA.isNotSet(NaN));
expectType<boolean>(RA.isNotSet({}));
expectType<boolean>(RA.isNotSet([]));
expectType<boolean>(RA.isNotSet(() => {}));
expectType<boolean>(RA.isNotSet('string'));
expectType<boolean>(RA.isNotSet(1));
expectType<boolean>(RA.isNotSet(Object()));
expectType<boolean>(RA.isNotSet(Object(5)));
expectType<boolean>(RA.isNotSet(new Map()));
