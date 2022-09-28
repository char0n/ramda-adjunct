import * as RA from 'ramda-adjunct';

interface Dictionary<T> {
  [key: string]: T;
}

const isValueGtIndex = (value: number, index: number, _: number[]): boolean =>
  value > index;
const isEven = (n: number, _: number, __: Dictionary<number>): boolean =>
  n % 2 === 0;
const isVowel = (char: string, _: number, __: string) =>
  'aeiou'.includes(char.toLowerCase());

RA.filterIndexed<number>(isValueGtIndex)([1, 2, 3, 4]); // $ExpectType number[]
RA.filterIndexed<number>(isValueGtIndex, [1, 2, 3, 4]); // $ExpectType number[]

RA.filterIndexed<number>(isEven)({ a: 0, b: 1, c: 2, d: 3, e: 4 }); // $ExpectType Dictionary<number>
RA.filterIndexed<number>(isEven, { a: 0, b: 1, c: 2, d: 3, e: 4 }); // $ExpectType Dictionary<number>

RA.filterIndexed(isVowel)('The quick brown fox jumps over the lazy dog'); // $ExpectType string[]
RA.filterIndexed(isVowel, 'The quick brown fox jumps over the lazy dog'); // $ExpectType string[]

// @ts-expect-error
RA.filterIndexed<number>(isVowel)([1, 2, 3, 4]);
// @ts-expect-error
RA.filterIndexed<number>(isVowel, [1, 2, 3, 4]);
// @ts-expect-error
RA.filterIndexed<number>(isValueGtIndex)({ a: 0, b: 1, c: 2, d: 3, e: 4 });
// @ts-expect-error
RA.filterIndexed<number>(isValueGtIndex, { a: 0, b: 1, c: 2, d: 3, e: 4 });
// @ts-expect-error
RA.filterIndexed(isEven)('The quick brown fox jumps over the lazy dog');
// @ts-expect-error
RA.filterIndexed(isEven, 'The quick brown fox jumps over the lazy dog');
