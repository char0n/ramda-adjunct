import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<string>(RA.trimCharsStart('-_', '-_-abc-_-'));
expectType<string>(RA.trimCharsStart('', '-_-abc-_-'));
expectType<string>(RA.trimCharsStart('-_', ''));

expectError(RA.trimCharsStart(1, 42));
expectError(RA.trimCharsStart([], 'abc'));
expectError(RA.trimCharsStart('-_', []));
expectError(RA.trimCharsStart({}, 'abc'));
expectError(RA.trimCharsStart('-_', {}));
expectError(RA.trimCharsStart('-_', null));
expectError(RA.trimCharsStart(null, 'abc'));
expectError(RA.trimCharsStart('-_', undefined));
expectError(RA.trimCharsStart(undefined, 'abc'));
