import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isMap(new Map()));
// $ExpectType boolean
RA.isMap(
  new Map([
    [1, 2],
    [2, 1],
  ])
);
expectType<boolean>(RA.isMap(new Set()));
expectType<boolean>(RA.isMap(new Set([1, 2])));
expectType<boolean>(RA.isMap(+0));
expectType<boolean>(RA.isMap(null));
expectType<boolean>(RA.isMap(true));
expectType<boolean>(RA.isMap(NaN));
expectType<boolean>(RA.isMap({}));
expectType<boolean>(RA.isMap([]));
expectType<boolean>(RA.isMap(() => {}));
expectType<boolean>(RA.isMap('string'));
expectType<boolean>(RA.isMap(1));
expectType<boolean>(RA.isMap(Object()));
expectType<boolean>(RA.isMap(Object(5)));
