import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

class Impl implements Iterable<number> {
  *[Symbol.iterator](): Iterator<number> {
    yield 1;
    yield 2;
    yield 3;
  }
}

const arr = [1, 2, 3];
const str = 'foo';
const map = new Map([
  ['a', 1],
  ['b', 2],
]);
const set = new Set([1, 2, 3]);
const iter: Iterable<number> = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};
const impl = new Impl();

// Is Iterable
if (RA.isIterable(arr)) {
  expectType<number[]>(arr);
}

if (RA.isIterable(str)) {
  expectType<'foo'>(str);
}

if (RA.isIterable(map)) {
  expectType<Map<string, number>>(map);
}

if (RA.isIterable(set)) {
  expectType<Set<number>>(set);
}

if (RA.isIterable(iter)) {
  expectType<Iterable<number>>(iter);
}

if (RA.isIterable(impl)) {
  expectType<Impl>(impl);
}

// Basic type checks
expectType<boolean>(RA.isIterable(arr));
expectType<boolean>(RA.isIterable(str));
expectType<boolean>(RA.isIterable({}));
expectType<boolean>(RA.isIterable(42));
expectType<boolean>(RA.isIterable(null));
expectType<boolean>(RA.isIterable(undefined));
