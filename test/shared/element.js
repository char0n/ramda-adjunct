export default (() => {
  if (typeof document === 'object') {
    return document.createElement('span');
  }
  return undefined;
})();
