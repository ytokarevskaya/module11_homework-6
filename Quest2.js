// Задание 2

function number(a) {
  if (a < 1000){
    let flag = true;
    if (a == 0 || a == 1) {
      flag = false;
    } else {
      for (let i = 2; i < a; i++) {
        if (a % i == 0) {
          flag = false;
          break;
        }
      }
    }
    console.log(flag == true? 'Простое число' : 'Составное число');
  } else {
    console.log('Невернные данные')
  }
}

// Задание сделано верно, но вы слишком усложнили с условными операторами, можно было сделать проще :) выше исправила