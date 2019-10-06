import * as RA from 'ramda-adjunct';

RA.appendFlipped([1, 2], 3); // $ExpectType number[]
RA.appendFlipped(['a', 'b'], 'c'); // $ExpectType string[]
RA.appendFlipped(['a', 2], 3); // $ExpectType (string | number)[]
RA.appendFlipped<number>([1, 2], 3); // $ExpectType number[]
RA.appendFlipped<string>(['a', 'b'], 'c'); // $ExpectType string[]
