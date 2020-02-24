import "./main.scss";

let power = 0;
let decimalSum = 0;
let arr = [];
let conversion = 'decimal-to-binary';

const divide = (num) => {
  if (num === 0) {
    arr.unshift(0);
  } else if (Math.trunc(num / 2) === 0) {
    arr.unshift(num % 2);
  } else {
    arr.unshift(num % 2);
    num = Math.trunc(num / 2);
    divide(num);
  }
}

const resetValues = () => {
  arr = [];
  power = 0;
  decimalSum = 0;
}

const convertDecimalToBinary = (num) => {

  resetValues();
  divide(num);
  arr = arr.join('');
  return (arr);
}

const convertBinaryToDecimal = (num) => {

  resetValues();

  arr = num.split('').map(Number);

  for (let index = arr.length - 1; index >= 0; index -= 1) {
    decimalSum += arr[index] * 2 ** power;
    power += 1;
  }

  return (decimalSum);
}

const init = () => {
  const formElm = document.querySelector('#form-converter');
  const inputElm = document.querySelector('#input');
  const outputElm = document.querySelector('#output');
  const submitElm = document.querySelector('#convert');
  const switchElm = document.querySelector('#switch');

  formElm.addEventListener('submit', (e) => {
    e.preventDefault();
    let result = 0;

    switch (conversion) {
      case 'decimal-to-binary':
        result = convertDecimalToBinary(inputElm.value);
        outputElm.value = result;
        break;

      case 'binary-to-decimal':
        result = convertBinaryToDecimal(inputElm.value);
        outputElm.value = result;
        break;
    }
  })

  switchElm.addEventListener('click', (e) => {
    e.preventDefault();

    if (conversion === 'decimal-to-binary') {
      conversion = 'binary-to-decimal';
    } else {
      conversion = 'decimal-to-binary';
    }

    console.log(conversion);

  })
}


document.addEventListener('DOMContentLoaded', init);


