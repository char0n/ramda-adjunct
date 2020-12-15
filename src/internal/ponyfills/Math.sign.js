const signPonyfill = (number) => (number > 0) - (number < 0) || +number;

export default signPonyfill;
