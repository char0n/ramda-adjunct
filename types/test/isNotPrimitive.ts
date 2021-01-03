import * as RA from 'ramda-adjunct';

RA.isNotPrimitive(3); // $ExpectType boolean
RA.isNotPrimitive(''); // $ExpectType boolean
RA.isNotPrimitive(true); // $ExpectType boolean
RA.isNotPrimitive(null); // $ExpectType boolean
RA.isNotPrimitive(undefined); // $ExpectType boolean
RA.isNotPrimitive(Symbol.for('')); // $ExpectType boolean
RA.isNotPrimitive([]); // $ExpectType boolean
RA.isNotPrimitive({}); // $ExpectType boolean
RA.isNotPrimitive(() => {}); // $ExpectType boolean
RA.isNotPrimitive(new Set()); // $ExpectType boolean

// Test type narrowing
interface SomeObj {
  a: string;
}
type PrimitiveOrSomeObj = SomeObj | string;

const test: PrimitiveOrSomeObj = { a: 'hi' };

if (RA.isNotPrimitive(test)) {
  test; // $ExpectType SomeObj
}
