import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isSet(new Set()));
expectType<boolean>(RA.isSet(new Set([1, 2])));
expectType<boolean>(RA.isSet(+0));
expectType<boolean>(RA.isSet(null));
expectType<boolean>(RA.isSet(true));
expectType<boolean>(RA.isSet(NaN));
expectType<boolean>(RA.isSet({}));
expectType<boolean>(RA.isSet([]));
expectType<boolean>(RA.isSet(() => {}));
expectType<boolean>(RA.isSet('string'));
expectType<boolean>(RA.isSet(1));
expectType<boolean>(RA.isSet(Object()));
expectType<boolean>(RA.isSet(Object(5)));
expectType<boolean>(RA.isSet(new Map()));
