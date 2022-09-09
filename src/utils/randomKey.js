/* eslint-disable no-bitwise */
function randomKey(obj) {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
}

export default randomKey;
