/* eslint-disable import/extensions */
import checkNumber from '../src/checkNumber.js';


test('выдает число, если ввели число', () => {
  const numberValue = checkNumber('12');
  expect(numberValue).toBe(12);
});

test('выдает число, если ввели десятичное число', () => {
  const numberValue = checkNumber('12.4');
  expect(numberValue).toBe(12.4);
});

test('выдает ошибку, если ввели не число', () => {
  const numberValue = checkNumber('привет');
  expect(numberValue).toBe('isNaN');
});

test('выдаст ошибку, если ввели не десятичное число', () => {
  const numberValue = checkNumber('0x12');
  expect(numberValue).toBe('isNaN');
});
