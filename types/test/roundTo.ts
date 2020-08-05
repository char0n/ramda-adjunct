import * as RA from 'ramda-adjunct';

RA.roundTo(2, 11); // $ExpectType number
RA.roundTo(3, 11); // $ExpectType number
RA.roundTo(4, 11); // $ExpectType number
RA.roundTo(0.5, 3.75); // $ExpectType number

RA.roundTo(4)(11); // $ExpectType number
RA.roundTo(0.5)(3.75); // $ExpectType number

RA.roundTo('', null); // $ExpectError
RA.roundTo(''); // $ExpectError
RA.roundTo([]); // $ExpectError
RA.roundTo('', {}); // $ExpectError
RA.roundTo(undefined, {}); // $ExpectError
RA.roundTo(() => {}, []); // $ExpectError
