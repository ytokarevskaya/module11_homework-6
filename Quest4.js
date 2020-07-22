// Задание 4

function number(a,b) {
  let arr = []
  for (let i = 0; a + i <= b; i++) {
    arr.push(a+i);
  }
  return arr;
}

arr = number(3, 5)

arr.forEach((el, i) => {
  setTimeout(() => {
    console.log(el)
  }, (i + 1) * 1000)
})
