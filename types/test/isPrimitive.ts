import * as RA from 'ramda-adjunct';

RA.isPrimitive(3); // $ExpectType boolean
RA.isPrimitive(''); // $ExpectType boolean
RA.isPrimitive(true); // $ExpectType boolean
RA.isPrimitive(null); // $ExpectType boolean
RA.isPrimitive(undefined); // $ExpectType boolean
RA.isPrimitive(Symbol.for('')); // $ExpectType boolean
RA.isPrimitive([]); // $ExpectType boolean
RA.isPrimitive({}); // $ExpectType boolean
RA.isPrimitive(() => {}); // $ExpectType boolean
RA.isPrimitive(new Set()); // $ExpectType boolean

// Test type narrowing
interface SomeObj {
  a: string;
}
type PrimitiveOrSomeObj = SomeObj | string;

const test: PrimitiveOrSomeObj = 'hi';

if (RA.isPrimitive(test)) {
  test; // $ExpectType string
}
