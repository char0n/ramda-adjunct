export default (() => {
  try {
    return new Function('return function* () { }')();
  } catch (e) {
    return undefined;
  }
})();
