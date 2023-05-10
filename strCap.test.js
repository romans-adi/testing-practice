const strCap = require ('./strCap');

test('strCap function capitalizes the first letter of a string', () => {
  expect(strCap('hello')).toBe('Hello');
});
