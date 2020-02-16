import "./main.scss";

console.log("connected");

let power = 0;
let decimalSum = 0;

const convertBinaryToDecimal = (num) => {

  let arr = num.split('').map(Number);
  console.log(arr)

  for (let index = arr.length - 1; index >= 0; index -= 1) {
    decimalSum += arr[index] * 2 ** power;
    power += 1;
  }

  console.log(decimalSum);
}

convertBinaryToDecimal("1111");

