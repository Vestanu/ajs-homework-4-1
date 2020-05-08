/* eslint-disable no-useless-catch */
/* eslint-disable no-console */
/* eslint-disable no-throw-literal */

function checkNumber(value) {
  try {
    if (parseFloat(value).toString() !== value) {
      throw new Error('is NaN');
    }
    return Number(value);
  } catch (e) {
    return 'isNaN';
  }
}

export default checkNumber;
