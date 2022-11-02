
```
async function show() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Дождались!'), 1000)
  });

  let result = await promise; // будет ждать, пока промис не выполнится (*)

  console.log(result); // "Дождались!"
}

show();
```
