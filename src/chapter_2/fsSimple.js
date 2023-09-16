const fs = require('fs');
const path = require('path');

const fileToRead = path.resolve(__dirname, 'files/fsSimple/file1.txt');
const fileToWrite = path.resolve(__dirname, 'files/fsSimple/file2.txt');

// Function to read and write data using callback hell
const readAndWriteCallbackHell = () => {
  fs.readFile(fileToRead, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Error reading file:', err);
    }

    fs.writeFile(fileToWrite, data, 'utf8', (err) => {
      if (err) {
        throw new Error('Error writing file:', err);
      }

      console.log('Data successfully copied.');
    });
  });
};

// Function to read and write data using promises
const readAndWritePromises = () => {
  const readFilePromise = new Promise((resolve, reject) => {
    fs.readFile(fileToRead, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

  readFilePromise
    .then((data) => {
      return new Promise((resolve, reject) => {
        fs.writeFile(fileToWrite, data, 'utf8', (err) => {
          if (err) {
            reject(err);
          } else {
            resolve('Data successfully copied.');
          }
        });
      });
    })
    .then((message) => {
      console.log(message);
    })
    .catch((err) => {
      console.error('Error', err);
    });
};

// Function to read and write data using async/await
const readAndWriteAsyncAwait = async () => {
  try {
    const data = await fs.promises.readFile(fileToRead, 'utf8');
    await fs.promises.writeFile(fileToWrite, data, 'utf8');
    console.log('Data successfully copied.');
  } catch (err) {
    console.error('Error:', err);
  }
};

/* Usage */

// readAndWriteCallbackHell();
// readAndWritePromises();
// readAndWriteAsyncAwait();
