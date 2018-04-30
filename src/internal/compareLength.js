import { curry, compose, length } from 'ramda';

const compareLength = curry((comparator, value, list) =>
  compose(comparator(value), length)(list)
);

export default compareLength;
