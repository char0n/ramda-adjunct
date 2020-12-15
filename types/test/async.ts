import * as RA from 'ramda-adjunct';

RA.async(() => {}); // $ExpectType Function
RA.async(1); // $ExpectError
RA.async(''); // $ExpectError
RA.async({}); // $ExpectError
