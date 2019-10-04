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

RA.anyP([1, 2]); // $ExpectType Promise<number>
RA.anyP(['a', 'b']); // $ExpectType Promise<string>
RA.anyP([1, 'a']); // $ExpectType Promise<string | number>
RA.anyP([]); // $ExpectType Promise<never>
RA.anyP(customIterable); // $ExpectType Promise<number>
