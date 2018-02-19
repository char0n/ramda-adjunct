import { both, converge, equals, identity } from 'ramda';

import isFinite from '../../isFinite';

const isIntegerPolyfill = both(
  isFinite,
  converge(equals, [Math.floor, identity])
);

export default isIntegerPolyfill;
