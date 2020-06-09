import { replace } from 'ramda';

const trimStart = replace(/^[\s\uFEFF\xA0]+/, '');

export default trimStart;
