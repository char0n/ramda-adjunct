import * as RA from 'ramda-adjunct';

RA.trimCharsEnd('-_', '-_-abc-_-'); // $ExpectType string
RA.trimCharsEnd('', '-_-abc-_-'); // $ExpectType string
RA.trimCharsEnd('-_', ''); // $ExpectType string

// @ts-expect-error
RA.trimCharsEnd(1, 42);
// @ts-expect-error
RA.trimCharsEnd([], 'abc');
// @ts-expect-error
RA.trimCharsEnd('-_', []);
// @ts-expect-error
RA.trimCharsEnd({}, 'abc');
// @ts-expect-error
RA.trimCharsEnd('-_', {});
// @ts-expect-error
RA.trimCharsEnd('-_', null);
// @ts-expect-error
RA.trimCharsEnd(null, 'abc');
// @ts-expect-error
RA.trimCharsEnd('-_', undefined);
// @ts-expect-error
RA.trimCharsEnd(undefined, 'abc');
