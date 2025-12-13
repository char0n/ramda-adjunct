import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.isSparseArray(new Array(3)));
// tslint:disable-next-line:no-sparse-arrays
expectType<boolean>(RA.isSparseArray([1, , 3]));

expectType<boolean>(RA.isSparseArray([1, 2, 3]));
expectType<boolean>(RA.isSparseArray([]));
expectType<boolean>(RA.isSparseArray(new Array(0)));

expectType<boolean>(RA.isSparseArray(new Date()));
expectType<boolean>(RA.isSparseArray(new Error()));
expectType<boolean>(RA.isSparseArray(RA.isSparseArray));
expectType<boolean>(RA.isSparseArray({ a: 1 }));
expectType<boolean>(RA.isSparseArray(3));
expectType<boolean>(RA.isSparseArray(/regex/));
expectType<boolean>(RA.isSparseArray('abc'));
expectType<boolean>(RA.isSparseArray(Symbol));
