/* eslint-disable no-console */
/* eslint-disable no-throw-literal */

function checkForm(value) {
  try {
    if (Number(value)) {
      return Number(value);
    }
    throw ('is NaN');
  } catch (e) {
    return console.log(e);
  }
}

export default checkForm;
