import { both, converge, equals, identity } from 'ramda';

import isFinite from '../../isFinite';


export default both(isFinite, converge(equals, [Math.floor, identity]));
