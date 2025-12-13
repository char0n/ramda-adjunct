import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

interface Dictionary<T> {
  [key: string]: T;
}

const isValueGtIndex = (value: number, index: number, _: number[]): boolean =>
  value > index;
const isEven = (n: number, _: number, __: Dictionary<number>): boolean =>
  n % 2 === 0;
const isVowel = (char: string, _: number, __: string) =>
  'aeiou'.includes(char.toLowerCase());

expectType<number[]>(RA.filterIndexed<number>(isValueGtIndex)([1, 2, 3, 4]));
expectType<number[]>(RA.filterIndexed<number>(isValueGtIndex, [1, 2, 3, 4]));

expectType<Dictionary<number>>(RA.filterIndexed<number>(isEven)({ a: 0, b: 1, c: 2, d: 3, e: 4 }));
expectType<Dictionary<number>>(RA.filterIndexed<number>(isEven, { a: 0, b: 1, c: 2, d: 3, e: 4 }));

expectType<string[]>(RA.filterIndexed(isVowel)('The quick brown fox jumps over the lazy dog'));
expectType<string[]>(RA.filterIndexed(isVowel, 'The quick brown fox jumps over the lazy dog'));

expectError(RA.filterIndexed<number>(isVowel)([1, 2, 3, 4]));
expectError(RA.filterIndexed<number>(isVowel, [1, 2, 3, 4]));
expectError(RA.filterIndexed<number>(isValueGtIndex)({ a: 0, b: 1, c: 2, d: 3, e: 4 }));
expectError(RA.filterIndexed<number>(isValueGtIndex, { a: 0, b: 1, c: 2, d: 3, e: 4 }));
expectError(RA.filterIndexed(isEven)('The quick brown fox jumps over the lazy dog'));
expectError(RA.filterIndexed(isEven, 'The quick brown fox jumps over the lazy dog'));
