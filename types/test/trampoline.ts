import * as RA from 'ramda-adjunct';

RA.trampoline(1, []); // $ExpectError
RA.trampoline(null, []); // $ExpectError
RA.trampoline(undefined, []); // $ExpectError
RA.trampoline({}, []); // $ExpectError
RA.trampoline({}, ['', []]); // $ExpectError
RA.trampoline('', []); // $ExpectError
RA.trampoline(true, []); // $ExpectError

RA.trampoline(Math.abs, []); // $ExpectType any
RA.trampoline(Math.abs, [-90]); // $ExpectType any
RA.trampoline(Math.min, []); // $ExpectType any
RA.trampoline(Math.min, [78, -89, 34]); // $ExpectType any
RA.trampoline(Array.isArray, [[]]); // $ExpectType any
RA.trampoline(String.prototype.trim.bind(' I am a string '), []); // $ExpectType any

RA.trampoline(Math.abs)([90]); // $ExpectType any
RA.trampoline(Math.max)([78, -89, 34]); // $ExpectType any
RA.trampoline(Array.isArray)([[]]); // $ExpectType any
