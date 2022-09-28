import * as RA from 'ramda-adjunct';

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

const obj: {} = { a: 1, b: 2, c: 3 };
const num = 42;
const bool = true;
const nul = null;
const und = undefined;

// Is Iterable
/// /////////////////////////////////////////////////////////////////////////////
if (RA.isIterable(arr)) {
  // $ExpectType number[]
  arr;
} else {
  // $ExpectType never
  arr;
}

if (RA.isIterable(str)) {
  // $ExpectType "foo"
  str;
} else {
  // $ExpectType never
  str;
}

if (RA.isIterable(map)) {
  // $ExpectType Map<string, number>
  map;
} else {
  // $ExpectType never
  map;
}

if (RA.isIterable(set)) {
  // $ExpectType Set<number>
  set;
} else {
  // $ExpectType never
  set;
}

if (RA.isIterable(iter)) {
  // $ExpectType Iterable<number>
  iter;
} else {
  // $ExpectType never
  iter;
}

if (RA.isIterable(impl)) {
  // $ExpectType Impl
  impl;
} else {
  // $ExpectType never
  impl;
}

// Is not Iterable
// Cannot test both conditions since the typing changed between ts versions.
/// /////////////////////////////////////////////////////////////////////////////
if (!RA.isIterable(obj)) {
  // @ts-expect-error
  obj[Symbol.iterator]();
}

if (!RA.isIterable(num)) {
  // @ts-expect-error
  num[Symbol.iterator]();
}

if (!RA.isIterable(bool)) {
  // @ts-expect-error
  bool[Symbol.iterator]();
}

if (!RA.isIterable(nul)) {
  // @ts-expect-error
  nul[Symbol.iterator]();
}

if (!RA.isIterable(und)) {
  // @ts-expect-error
  und[Symbol.iterator]();
}
