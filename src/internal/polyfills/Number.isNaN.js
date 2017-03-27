import { both } from 'ramda';

import isNumber from '../../isNumber';


export default both(isNumber, isNaN);
