import * as RA from 'ramda-adjunct';

interface Test {
  a: number | undefined;
  b: number | null;
  /* tslint:disable-next-line:no-null-undefined-union null or undefined is the accurate type here */
  c: number | null | undefined;
}

const obj: Test = {a: 1, b: 1, c: 1};

if (RA.isNotNil(obj.a)) {
  obj.a; // $ExpectType number
}

if (RA.isNotNil(obj.b)) {
  obj.b; // $ExpectType number
}

if (RA.isNotNil(obj.c)) {
  obj.c; // $ExpectType number
}

RA.isNotNil('string'); // $ExpectType boolean
RA.isNotNil(1); // $ExpectType boolean
RA.isNotNil([]); // $ExpectType boolean
RA.isNotNil({}); // $ExpectType boolean
RA.isNotNil(null); // $ExpectType boolean
RA.isNotNil(undefined); // $ExpectType boolean
