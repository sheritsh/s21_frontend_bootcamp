// Напишите функцию банкомат которая принимает на вход число и возвращает объект в формате:
// {номинал_купюры : количество_купюр}.
// Если банкомат не может выдать данную сумму, то выводится ошибка 'Incorrect value'.
// Купюры должны выдаться оптимальным образом (вместо 5 купюр номиналом 1000 выдается одна 5000).
// За раз банкомат может выдавать не более 20 купюр, если купюр для выдачи не хватает
// то выводится ошибка 'Limit exceeded'

const atm = (sum) => {
  let moneyForExchange = sum;
  const banknotes = [5000, 2000, 1000, 500, 200, 100, 50];
  const result = {};

  if (moneyForExchange % 50 !== 0) {
    return 'Incorrect value';
  }

  let totalBanknotes = 0;

  for (let i = 0; i < banknotes.length; i += 1) {
    const nominal = banknotes[i];
    const count = Math.floor(moneyForExchange / nominal);

    if (count > 0) {
      result[nominal] = count;
      moneyForExchange -= nominal * count;
      totalBanknotes += count;
    }
  }

  if (totalBanknotes > 20) {
    return 'Limit exceeded';
  }

  return result;
};

console.log(atm(8350)); // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
console.log(atm(2570)); // Incorrect value
console.log(atm(100050)); // Limit exceeded
