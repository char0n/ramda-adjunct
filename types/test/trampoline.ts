import * as RA from 'ramda-adjunct';

RA.trampoline(1); // $ExpectError
RA.trampoline(null); // $ExpectError
RA.trampoline(undefined); // $ExpectError
RA.trampoline([]); // $ExpectError
RA.trampoline({}); // $ExpectError
RA.trampoline({}, '', []); // $ExpectError
RA.trampoline(''); // $ExpectError
RA.trampoline(true); // $ExpectError
RA.trampoline(); // $ExpectError

RA.trampoline(Math.abs); // $ExpectType number
RA.trampoline(Math.abs, -90); // $ExpectType number
RA.trampoline(Math.min); // $ExpectType number
RA.trampoline(Math.min, 78, -89, 34); // $ExpectType number
RA.trampoline(Array.isArray, []); // $ExpectType boolean
RA.trampoline(String.prototype.trim.bind(' I am a string ')); // $ExpectType string
