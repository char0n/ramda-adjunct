import { empty, repeat } from 'ramda';

import concatAll from '../concatAll';

export default (s, n) =>
  typeof s.repeat === 'function'
    ? s.repeat(n)
    : concatAll(repeat(s, n)) || empty(s);
