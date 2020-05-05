/* eslint-disable no-useless-catch */
/* eslint-disable no-console */
/* eslint-disable no-throw-literal */

function checkForm(value) {
  try {
    if (Number(value)) {
      return Number(value);
    }
    throw new Error('is NaN');
  } catch (e) {
    throw e;
  }
}

export default checkForm;
