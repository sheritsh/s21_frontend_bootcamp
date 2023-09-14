// Вам надо набор функций который будет симулировать работу калькулятора.
// Для этого вам надо написать 9 функций, которые могут принимать в качестве аргумента
// другую функцию, если функция передана, то надо вернуть вызов функции с числом n,
// иначе вернуть число n.
// Например, функция one может принять в качестве аргумента функцию sum, тогда
// в return будет sum(1).Если же в функцию не передали ничего, то она просто вернет 1.
// Также надо написать 4 функции основных арифмитических операторов, которые
// принимают в качестве аргумента первое число, а возвращают функцию, которая
// принимает в качестве аргумента второе число и возвращает их сумму/разность/частое/произведение.

const createNumber = (num) => (callback) => (callback ? callback(num) : num);

const zero = createNumber(0);
const one = createNumber(1);
const two = createNumber(2);
const three = createNumber(3);
const four = createNumber(4);
const five = createNumber(5);
const six = createNumber(6);
const seven = createNumber(7);
const eight = createNumber(8);
const nine = createNumber(9);

const plus = (x) => (y) => x + y;
const minus = (x) => (y) => x - y;
const divide = (x) => (y) => x / y;
const mult = (x) => (y) => x * y;

console.log(one(mult(three(plus(four()))))); // Теперь вернется 7
