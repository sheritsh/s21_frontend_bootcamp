# Day 00 - Frontend boot camp

Data Types, Variable Declaration and Scope, Comparison Operators, Conditional Operators, Logical Operators, Loops, Array Methods, String Methods, Object Methods, Functions, Closures, Hoisting, Currying, Recursion.

## **Task 1.**

You need to write a function that takes an array of numbers as an argument and removes all duplicate values. Write the function using 2 different loops.

```
function removeReps(array) {}

removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11]); // Вывод [1,2,4,5,6,8,9,11]
```

| Input                                       |       Output       |
| ------------------------------------------- | :----------------: |
| removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11]) | [1,2,4,5,6,8,9,11] |
| removeReps([1,1,1,1])                       |        [1]         |
| removeReps([1,2,3,4,5,6])                   |   [1,2,3,4,5,6]    |

[Solution](src/chapter_3/removeReps.js)

## **Task 2.**

Write a function that takes two strings as input - a message (a regular text string) and a character to remove from that message.
**Be sure to use the methods and loops you have learned.**

| Ввод                                                |           Вывод           |
| --------------------------------------------------- | :-----------------------: |
| removeString("Большое и интересное сообщение", "о") | Бльше и интересне сбщение |
| removeString("Hello world!", "z")                   |       Hello world!        |
| removeString("А роза азора", "А")                   |        роза азора         |

[Solution](src/chapter_3/removeSymbol.js)

## **Task 3.**

Write a counter function that, with each call, returns a number 3 greater than the previous one. You cannot use variables declared with var.

```
function counter() {}

counter(); // Функция вернет 0
counter(); // Функция вернет 3
counter(); // Функция вернет 6
counter(); // Функция вернет 9

```

[Solution](src/chapter_4/counter.js)

## **Task 4.**

You need to describe a series of functions that can take an optional callback as an argument. If such an argument is provided, pass the number n to this callback; otherwise, simply return the number n.

For example, the one function can accept a function like sum as an argument. In this case, it will return sum(1). If no argument is passed to the function, it will simply return 1.

Additionally, you need to write four functions for basic arithmetic operations. These functions take the first number as an argument and return a function that accepts the second number as an argument and returns their sum, difference, quotient, or product.

| Input                          | Output |
| ------------------------------ | :----: |
| four()                         |   4    |
| five(mult(three()))            |   15   |
| one(mult(three(plus(four())))) |   7    |

[Solution](src/chapter_4/calculator.js)

## **Task 5.**

Write a function that takes the coordinates of a number in Pascal's Triangle and returns the value at those coordinates. Before completing the task, it is necessary to study Pascal's Triangle more thoroughly.

Initial coordinates: [0;0].
Recursion might be helpful here.

| Input                | Output |
| -------------------- | :----: |
| pascalsTriangle(3,2) |   3    |
| pascalsTriangle(5,4) |   5    |
| pascalsTriangle(1,1) |   1    |

[Solution](src/chapter_4/pascalsTriangle.js)

## **Task 6.**

Write a function that takes an index of a number from the Fibonacci sequence and returns its value.

Assume that the Fibonacci sequence starts with an index of 0 and is represented as 1, 1, 2, 3, 5, 8, 13, and so on.

| Input    | Output |
| -------- | :----: |
| fibo(5)  |   8    |
| fibo(1)  |   1    |
| fibo(8)  |   34   |
| fibo(21) | 17711  |

[Solution](src/chapter_4/fibonacci.js)

## **Task 7.**

Write a function that describes the basic behavior of an ATM. This function takes a number as input and returns an object in the format {banknote_denomination: banknote_count}.

Operating conditions of the function:

`-` If the ATM cannot dispense the specified amount, it should output an error message: 'Incorrect value.'

`-` Banknotes should be dispensed in an optimal manner (for example, instead of 5 banknotes with a denomination of 1000, one banknote with a denomination of 5000 should be dispensed).

`-` The ATM can dispense a maximum of 20 banknotes at a time. If there are not enough banknotes for the requested amount, it should output an error message: 'Limit exceeded.'

```
function atm(sum) {
  const banknots = [5000, 2000, 1000, 500, 200, 100, 50];
}
Example of how the function works:
atm(8350); // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
atm(2570); // Incorrect value
atm(100050); // Limit exceeded
```

| Input       |                          Output                           |
| ----------- | :-------------------------------------------------------: |
| atm(8350)   | {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 } |
| atm(2570)   |                      Incorrect value                      |
| atm(100050) |                      limit exceeded                       |

[Solution](src/chapter_4/atm.js)

## **Task 8.**

In this task, you will need to write a search algorithm that will determine whether it is possible to find the input word in a word search puzzle, which is also provided as input to the function.  
This task has two levels of difficulty:

`-` The first level includes only horizontal and vertical search.

`-` The second level additionally includes diagonal search.

`-` Words can be written from left to right and vice versa.

You can find an example of a word search puzzle and the expected output by: [link](./src//chapter_4/wordSearch.js).

And finally, the last task for today. This one is optional! It will require the knowledge you've gained through studying the topics and completing previous tasks.

[Solution](src/chapter_4/wordSearch.js)

## **Task 9.**

You need to write a function to solve Sudoku. The function takes one argument, a string in which hyphens (-) represent missing numbers. The function should return a string with all values filled in.

Let's play a real Sudoku puzzle, paying attention to how we approach solving the given problem.

`-` What strategies do we adopt, and why?

`-` How do we choose where to start?

`-` How do we know when it's truly time to place a number in a cell?

`-` What do we do when we're completely unsure how to fill in the remaining cells?

Be sure to implement the `prettyBoard` method, which takes a board represented as a string and returns a formatted version that is more visually recognizable. For example:

```
1 - 5 8 - 2 - - -
- 9 - - 7 6 4 - 5
2 - - 4 - - 8 1 9
- 1 9 - - 7 3 - 6
7 6 2 - 8 3 - 9 -
- - - - 6 1 - 5 -
- - 7 6 - - - 3 -
4 3 - - 2 - 5 - 1
6 - - 3 - 8 9 - -
```

| Input                                                                                       |                                                                                Output                                                                                 |
| ------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| sudoku("53--7----6--195----98----6-8---6---34--8-3--17---2---6-6----28----419--5----8--79") | <img width="136" alt="Screenshot 2022-04-18 at 20 36 18" src="https://user-images.githubusercontent.com/46561905/163840787-2a2248b5-2cb4-43e3-9837-cc9a4564db9b.png"> |

[The assignment file](./src//chapter_4/sudoku.js) contains test data for your function, and they come in three difficulty levels:

`-` Five puzzles can be solved using basic logic.

`-` Five of them require slightly more advanced logic.

`-` Five require your solver to have the ability to guess and backtrack if it reaches a dead end.

[Solution](src/chapter_4/sudoku.js)
