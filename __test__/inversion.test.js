/* eslint-disable import/extensions */
import checkForm from '../src/main.js';


test('выдает число, если ввели число', () => {
  const numberValue = checkForm(12);
  expect(numberValue).toBe(12);
});

test('выдает число, если ввели строку с числом', () => {
  const numberValue = checkForm('12');
  expect(numberValue).toBe(12);
});

test('выдает ошибку, если ввели не число', () => {
  expect(() => {
    checkForm('привет');
  }).toThrow();
});
