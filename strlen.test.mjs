const strlen = require('./strlen');

describe('strlen', () => {
  it('should return the length of a string', () => {
    expect(strlen('jest')).toBe(4);
    expect(strlen('world')).toBe(5);
  });

  it('should throw an error if the string is too short', () => {
    expect(() => strlen('')).toThrowError('String must be at least 1 character long');
  });

  it('should throw an error if the string is too long', () => {
    expect(() => strlen('abcdefghijklmnopqrstuvwxyz')).toThrowError('String must not be longer than 10 characters');
  });
});
