// Задание 2

function number(a) {
  if (a < 1000){
    let flag = true;
    if (a == 0) {
      flag = false;
    } else {
      if (a == 1) {
        flag = false;
      } else {
        for (let i = 2; i < a; i++) {
          if (a % i == 0) {
            flag = false;
            break;
          }
        }
      }
    }
    if (flag == true) {
      console.log('Простое число')
    } else {
      console.log('Составное число')
    }
  } else {
    console.log('Невернные данные')
  }
}
