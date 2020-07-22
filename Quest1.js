// Задание 1

let arr = [1, 2, 3, 4, 5, 6, 7, 0, 0, 0]


function counterElement(arr) {
  let even = 0;
  let odd = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] == 0){
      zero += 1;
      continue;
    } else {
      if (arr[i] % 2 === 0) {
        even += 1;
        continue;
      } else {
        odd += 1;
        continue;
      }
    }
  }

  console.log('Чётные: ' + even);
  console.log('Нечётные: ' + odd);
  console.log('Нулевые: ' + zero);
}

counterElement(arr)
