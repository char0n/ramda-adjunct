import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<Promise<undefined>>(RA.delayP(101));
expectType<Promise<string>>(RA.delayP({ timeout: 30, value: 'Hello friends' }));
expectType<Promise<number>>(RA.delayP({ timeout: 50, value: 42 }));
expectError(RA.delayP({ timeout: 30 }));
expectError(RA.delayP({ value: 30 }));
expectError(RA.delayP('Hello world'));
expectError(RA.delayP([]));

expectType<Promise<undefined>>(RA.delayP.reject(101));
expectType<Promise<string>>(RA.delayP.reject({ timeout: 30, value: 'Hello friends' }));
expectType<Promise<number>>(RA.delayP.reject({ timeout: 50, value: 42 }));
expectError(RA.delayP.reject({ timeout: 30 }));
expectError(RA.delayP.reject({ value: 30 }));
expectError(RA.delayP.reject('Hello world'));
expectError(RA.delayP.reject([]));
