import convertHex from '../../src/services/hex-converter';

describe('hex-converter', () => {
  it('converts a hex color into an rgb object', () => {
    const input = '#FF00AA';
    const expected = { r: 255, g: 0, b: 170 };
    const result = convertHex(input);
    expect(result).toEqual(expected);
  });
});
