import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.appendFlipped([1, 2], 3); // $ExpectType number[]
RA.appendFlipped(['a', 'b'], 'c'); // $ExpectType string[]
RA.appendFlipped(['a', 2], 3); // $ExpectType (string | number)[]
RA.appendFlipped<number>([1, 2], 3); // $ExpectType number[]
RA.appendFlipped<string>(['a', 'b'], 'c'); // $ExpectType string[]

RA.appendFlipped<string>([1, 'b'], 'c'); // $ExpectError
RA.appendFlipped<string>([1, 'b'])('c'); // $ExpectError
RA.appendFlipped(1, 'c'); // $ExpectError
RA.appendFlipped(1)('c'); // $ExpectError
RA.appendFlipped(customIterable, 'c'); // $ExpectError
RA.appendFlipped(customIterable)('c'); // $ExpectError
