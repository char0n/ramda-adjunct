export default (() => {
  try {
    return new Function('return async function() { }')();
  } catch (e) {
    return undefined;
  }
})();
