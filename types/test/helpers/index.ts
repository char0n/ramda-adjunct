export const customIterable: Iterable<number> = {
  *[Symbol.iterator](): IterableIterator<number> {
    yield 1;
    yield 2;
    yield 3;
  },
};
