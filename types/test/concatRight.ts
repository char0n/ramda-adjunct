import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<string>(RA.concatRight('ab', 'cd'));
expectType<string>(RA.concatRight('ab')('cd'));
expectType<number[]>(RA.concatRight([1, 2], [3, 4]));
expectType<number[]>(RA.concatRight([1, 2])([3, 4]));

expectError(RA.concatRight(1, 2));
expectError(RA.concatRight({}, {}));
expectError(RA.concatRight('ab', [1, 2]));
