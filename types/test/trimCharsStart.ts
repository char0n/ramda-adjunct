import * as RA from 'ramda-adjunct';

RA.trimCharsStart('-_', '-_-abc-_-'); // $ExpectType string
RA.trimCharsStart('', '-_-abc-_-'); // $ExpectType string
RA.trimCharsStart('-_', ''); // $ExpectType string

RA.trimCharsStart(1, 42); // $ExpectError
RA.trimCharsStart([], 'abc'); // $ExpectError
RA.trimCharsStart('-_', []); // $ExpectError
RA.trimCharsStart({}, 'abc'); // $ExpectError
RA.trimCharsStart('-_', {}); // $ExpectError
RA.trimCharsStart('-_', null); // $ExpectError
RA.trimCharsStart(null, 'abc'); // $ExpectError
RA.trimCharsStart('-_', undefined); // $ExpectError
RA.trimCharsStart(undefined, 'abc'); // $ExpectError
