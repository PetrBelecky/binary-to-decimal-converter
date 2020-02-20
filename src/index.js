import "./main.scss";

let power = 0;
let decimalSum = 0;

let arr = [];

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
  divide(num);
  return (arr);
}

const convertBinaryToDecimal = (num, output) => {

  resetValues();

  arr = num.split('').map(Number);

  for (let index = arr.length - 1; index >= 0; index -= 1) {
    decimalSum += arr[index] * 2 ** power;
    power += 1;
  }

  console.log(decimalSum);
  console.log(output);
  output.value = decimalSum;

}


const init = () => {
  const formElm = document.querySelector('#form-converter');
  const inputElm = document.querySelector('#input');
  const outputElm = document.querySelector('#output');
  const submitElm = document.querySelector('#submit');
  const convertElm = document.querySelector('#convert');

  console.log(formElm);
  console.log(inputElm);
  console.log(outputElm);
  console.log(submitElm);
  console.log(convertElm);

  formElm.addEventListener('submit', (e) => {
    e.preventDefault();
    convertBinaryToDecimal(inputElm.value, outputElm);
  })
}


document.addEventListener('DOMContentLoaded', init);


