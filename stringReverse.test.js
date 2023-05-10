const strRev = require ('./stringReverse');

test('Reverses the string correctly', () => {
  expect(strRev('hello')).toEqual('olleh');
  expect(strRev('jest')).toEqual('tsej');
  expect(strRev('romans')).toEqual('snamor');
});
