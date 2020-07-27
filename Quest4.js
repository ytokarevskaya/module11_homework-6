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

// Задание сделано верно, но проще было воспользоваться setInterval, чтобы не создавать дополнительно массив и не запускать setTimeout для каждого элемента. Если массив будет длинным, это будет сильно нагружать память. Ниже более оптимальный вариант решения:

function logNumbers(begin, end) {
  let current = begin;

  let timerId = setInterval(function() {
    console.log(current);
    if (current == end) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

logNumbers(5, 15);