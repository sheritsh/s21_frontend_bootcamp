// Вам нужно написать функцию которая принимает в качестве аргумента массив чисел
// и удаляет все повторяющиеся значения.

const removeReps = (arr) => {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArray.length; j += 1) {
      if (arr[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
};

console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11])); // [1,2,4,5,6,8,9,11]
