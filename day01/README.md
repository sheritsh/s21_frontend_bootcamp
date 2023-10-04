# Day 01 - Frontend boot camp

Object-Oriented Programming (OOP), Classes, Getters/Setters, Asynchrony, Event Loop, Callbacks, Promises, Async/Await, Node.js, File System (FS).

## **Task1.**

You need to describe the `Employee` class. \
![image](https://user-images.githubusercontent.com/48245816/170902240-ab540276-e2b6-450f-ac32-d11ced7580ea.png)

[Solution](src/chapter_1/Employee.js)

## **Task2.**

Continuing from the previous task, you need to create [5 new classes](./src/chapter_1/Hard_classes.md).

[Solution](src/chapter_1/hard-classes/)

## **Task3.**

You need to read data from the file `file1.txt`, and after reading, the obtained data should be written to the file `file2.txt`. You need to implement this using 3 different methods, with a separate function for each method: \
`-` readAndWriteCallbackHell() - in this function, you should only use callback passing to an asynchronous function. \
`-` readAndWritePromises() - in this function, you should use promises and the then method. \
`-` readAndWriteAsyncAwait() - in this function, you can use async/await.

[Solution](src/chapter_2/fsSimple.js)

## **Task4.**

When a user loads a page, data from the server arrives on the client asynchronously and unevenly. Let's simulate this behavior using the file system of your project. You will need to write a progress bar applicable not to a statically defined time but to the size of "loaded" files. Based on the obtained file sizes, implement your own progress bar.
Your progress bar will fill up to the total size of all the files in the [folder](./src/chapter_2/files/fsHard). If you have a file that is 5KB in size, and the total size of all the files is 10KB, then your progress bar after processing such a file should be filled to 50% (100% \* (5Kb / 10Kb)).
Create a progress bar in the **Terminal Console**, not in a web browser. It should increment with each newly loaded file.

[Solution](src/chapter_2/fsHard.js)
