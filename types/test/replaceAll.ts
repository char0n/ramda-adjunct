import * as RA from 'ramda-adjunct';

RA.replaceAll('ab', 'ef', 'ab cd ab cd ab cd'); // $ExpectType string
RA.replaceAll('', 'x', 'xxx'); // $ExpectType string
RA.replaceAll(/x/g, 'v', 'xxx'); // $ExpectType string

RA.replaceAll(/x/, 'v', 'xxx'); // $ExpectError
