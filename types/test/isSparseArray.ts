import * as RA from 'ramda-adjunct';

RA.isSparseArray(new Array(3)); // $ExpectType boolean
// tslint:disable-next-line:no-sparse-arrays
RA.isSparseArray([1, , 3]); // $ExpectType boolean

RA.isSparseArray([1, 2, 3]); // $ExpectType boolean
RA.isSparseArray([]); // $ExpectType boolean
RA.isSparseArray(new Array(0)); // $ExpectType boolean

RA.isSparseArray(new Date()); // $ExpectType boolean
RA.isSparseArray(new Error()); // $ExpectType boolean
RA.isSparseArray(RA.isSparseArray); // $ExpectType boolean
RA.isSparseArray({ a: 1 }); // $ExpectType boolean
RA.isSparseArray(3); // $ExpectType boolean
RA.isSparseArray(/regex/); // $ExpectType boolean
RA.isSparseArray('abc'); // $ExpectType boolean
RA.isSparseArray(Symbol); // $ExpectType boolean
