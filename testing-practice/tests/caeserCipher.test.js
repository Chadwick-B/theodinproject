import caeserCipher from '../src/caeserCipher';

test('Cipher letters', () => {
  expect(caeserCipher('abc')).toBe('bcd');
});

test('Cipher capital letters', () => {
  expect(caeserCipher('AbCDeFGH')).toBe('BcDEfGHI');
});

test('Cipher string containing z or Z', () => {
  expect(caeserCipher('AbDzZ')).toBe('BcEaA');
});

test('Cipher string containing whitespace/special characters', () => {
  expect(caeserCipher('12 3-a')).toBe('12 3-b');
});
