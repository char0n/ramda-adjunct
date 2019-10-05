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

RA.firstP([1, 2]); // $ExpectType Promise<number>
RA.firstP(['a', 'b']); // $ExpectType Promise<string>
RA.firstP([1, 'a']); // $ExpectType Promise<string | number>
RA.firstP([]); // $ExpectType Promise<never>
RA.firstP(customIterable); // $ExpectType Promise<number>
