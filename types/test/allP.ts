import * as RA from 'ramda-adjunct';

/**
 * Helpers.
 */

const customIterable = {
    *[Symbol.iterator](): IterableIterator<number> {
        yield 1;
        yield 2;
        yield 3;
    },
};

/**
 * Tests.
 */

RA.allP([1, 2]); // $ExpectType Promise<number[]>
RA.allP(['a', 'b']); // $ExpectType Promise<string[]>
RA.allP([1, 'a']); // $ExpectType Promise<(string | number)[]>
RA.allP([]); // $ExpectType Promise<never[]>
RA.allP(customIterable); // $ExpectType Promise<number[]>
