// Задание 5

const degree = (x, n) => {
  let res = x;
  for (let i = 1; i < n; i++) {
    res = res * x;
  }
  console.log(res)
}

degree(3, 2)
