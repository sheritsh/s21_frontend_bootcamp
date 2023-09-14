//  Напишите функцию counter, которая при каждом вызове будет возвращать
//  числа на 3 больше, чем в прошлый. Нельзя использовать переменные, объявленные через var!

function counter() {
  let count = 0;

  return () => {
    const currentCount = count;
    count += 3;
    return currentCount;
  };
}

const myCounter = counter();

console.log(myCounter()); // Функция вернет 0
console.log(myCounter()); // Функция вернет 3
console.log(myCounter()); // Функция вернет 6
console.log(myCounter()); // Функция вернет 9
