import * as RA from 'ramda-adjunct';

RA.async(() => {}); // $ExpectType Function
// @ts-expect-error
RA.async(1);
// @ts-expect-error
RA.async('');
// @ts-expect-error
RA.async({});
