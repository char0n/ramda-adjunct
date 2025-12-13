import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

const lensJSON = RA.lensIso(JSON.parse, JSON.stringify);
expectType<Function>(lensJSON);
expectType<(from: Function) => Function>(RA.lensIso(JSON.parse));
expectError(RA.lensIso(JSON.parse, 'Hello world'));
expectError(RA.lensIso(JSON.parse, 0));
expectError(RA.lensIso(JSON.parse, {}));
expectError(RA.lensIso(JSON.parse, []));
expectError(RA.lensIso('Hello world'));
expectError(RA.lensIso(0));
expectError(RA.lensIso({}));
expectError(RA.lensIso([]));

expectType<Function>(RA.lensIso.from(lensJSON));
expectError(RA.lensIso.from('Hello world'));
expectError(RA.lensIso.from(0));
expectError(RA.lensIso.from({}));
expectError(RA.lensIso.from([]));
