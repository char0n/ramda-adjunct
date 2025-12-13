import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<number>(RA.findOr(1, (val) => val === 1, [1, 2, 3]));
expectType<string>(RA.findOr('1', (val) => val === '1', ['1', '2', '3']));
expectType<number | "1">(RA.findOr('1', (val) => val === 4, [1, 2, 3]));
expectType<number>(RA.findOr(1, () => false, [1, 2, 3]));

expectType<number | "1">(RA.findOr<'1', number>('1')((val) => val === 4, [1, 2, 3]));
expectType<number | "1">(RA.findOr<'1', number>('1', (val) => val === 4)([1, 2, 3]));
expectType<number | "1">(RA.findOr<'1', number>('1')((val) => val === 4)([1, 2, 3]));

expectError(RA.findOr(1, (val) => val, [1, 2, 3]));
expectError(RA.findOr(1, (val) => val));
expectError(RA.findOr());
