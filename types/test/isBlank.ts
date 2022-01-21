import * as RA from 'ramda-adjunct';

RA.isBlank(''); // $ExpectType boolean
RA.isBlank('   '); // $ExpectType boolean
RA.isBlank('\t\n'); // $ExpectType boolean
RA.isBlank({}); // $ExpectType boolean
RA.isBlank(null); // $ExpectType boolean
RA.isBlank(undefined); // $ExpectType boolean
RA.isBlank([]); // $ExpectType boolean
RA.isBlank(false); // $ExpectType boolean

RA.isBlank('value'); // $ExpectType boolean
RA.isBlank({ foo: 'foo' }); // $ExpectType boolean
RA.isBlank([1, 2, 3]); // $ExpectType boolean
RA.isBlank(true); // $ExpectType boolean
