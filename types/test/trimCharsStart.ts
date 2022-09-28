import * as RA from 'ramda-adjunct';

RA.trimCharsStart('-_', '-_-abc-_-'); // $ExpectType string
RA.trimCharsStart('', '-_-abc-_-'); // $ExpectType string
RA.trimCharsStart('-_', ''); // $ExpectType string

// @ts-expect-error
RA.trimCharsStart(1, 42);
// @ts-expect-error
RA.trimCharsStart([], 'abc');
// @ts-expect-error
RA.trimCharsStart('-_', []);
// @ts-expect-error
RA.trimCharsStart({}, 'abc');
// @ts-expect-error
RA.trimCharsStart('-_', {});
// @ts-expect-error
RA.trimCharsStart('-_', null);
// @ts-expect-error
RA.trimCharsStart(null, 'abc');
// @ts-expect-error
RA.trimCharsStart('-_', undefined);
// @ts-expect-error
RA.trimCharsStart(undefined, 'abc');
