// Задание 3

function firstNumber(a) {
  return function(b) {
    let sum = a + b
    console.log(sum)
  }
}

let sumNumbers = firstNumber(4)
sumNumbers(2)
