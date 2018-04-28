import { curry, compose, flip, length } from 'ramda';

const compareLength = comparator =>
  curry((valueLength, value) =>
    compose(flip(comparator)(valueLength), length)(value)
  );

export default compareLength;
