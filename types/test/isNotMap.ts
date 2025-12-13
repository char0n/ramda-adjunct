import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isNotMap(new Map()));
// $ExpectType boolean
RA.isNotMap(
  new Map([
    [1, 2],
    [2, 1],
  ])
);
expectType<boolean>(RA.isNotMap(new Set()));
expectType<boolean>(RA.isNotMap(new Set([1, 2])));
expectType<boolean>(RA.isNotMap(+0));
expectType<boolean>(RA.isNotMap(null));
expectType<boolean>(RA.isNotMap(true));
expectType<boolean>(RA.isNotMap(NaN));
expectType<boolean>(RA.isNotMap({}));
expectType<boolean>(RA.isNotMap([]));
expectType<boolean>(RA.isNotMap(() => {}));
expectType<boolean>(RA.isNotMap('string'));
expectType<boolean>(RA.isNotMap(1));
expectType<boolean>(RA.isNotMap(Object()));
expectType<boolean>(RA.isNotMap(Object(5)));
