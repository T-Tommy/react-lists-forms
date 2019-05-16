export default function convertHex(hex) { 
  return ['r', 'g', 'b'].reduce((acc, cur, i) => {
    const interval = i * 2;
    acc[cur] = parseInt(hex.slice(interval + 1, interval + 3), 16);
    return acc;
  }, {});
}
