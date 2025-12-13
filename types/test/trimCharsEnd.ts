import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<string>(RA.trimCharsEnd('-_', '-_-abc-_-'));
expectType<string>(RA.trimCharsEnd('', '-_-abc-_-'));
expectType<string>(RA.trimCharsEnd('-_', ''));

expectError(RA.trimCharsEnd(1, 42));
expectError(RA.trimCharsEnd([], 'abc'));
expectError(RA.trimCharsEnd('-_', []));
expectError(RA.trimCharsEnd({}, 'abc'));
expectError(RA.trimCharsEnd('-_', {}));
expectError(RA.trimCharsEnd('-_', null));
expectError(RA.trimCharsEnd(null, 'abc'));
expectError(RA.trimCharsEnd('-_', undefined));
expectError(RA.trimCharsEnd(undefined, 'abc'));
