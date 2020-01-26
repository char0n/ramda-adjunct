import * as RA from 'ramda-adjunct';

RA.trimCharsEnd('-_', '-_-abc-_-'); // $ExpectType string
RA.trimCharsEnd('', '-_-abc-_-'); // $ExpectType string
RA.trimCharsEnd('-_', ''); // $ExpectType string

RA.trimCharsEnd(1, 42); // $ExpectError
RA.trimCharsEnd([], 'abc'); // $ExpectError
RA.trimCharsEnd('-_', []); // $ExpectError
RA.trimCharsEnd({}, 'abc'); // $ExpectError
RA.trimCharsEnd('-_', {}); // $ExpectError
RA.trimCharsEnd('-_', null); // $ExpectError
RA.trimCharsEnd(null, 'abc'); // $ExpectError
RA.trimCharsEnd('-_', undefined); // $ExpectError
RA.trimCharsEnd(undefined, 'abc'); // $ExpectError
