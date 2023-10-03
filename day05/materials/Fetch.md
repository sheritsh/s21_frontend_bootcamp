Базовый синтаксис.
```
let promise = fetch(url, [options])
```
где: \
`-` url – URL для отправки запроса. \
`-` options – дополнительные параметры: метод, заголовки и так далее.

Без options это простой GET-запрос, скачивающий содержимое по адресу url.

Для отправки POST-запроса или запроса с другим методом, нам необходимо использовать fetch параметры:
method – HTTP метод, например POST и body – тело запроса, одно из списка: \
`-` Строка (например, в формате JSON). \
`-` Объект FormData для отправки данных как form/multipart. \
`-` Blob/BufferSource для отправки бинарных данных. \
`-` URLSearchParams для отправки данных в кодировке x-www-form-urlencoded, используется редко.

Например, этот код отправляет объект user как JSON:
```
let user = {
  name: 'Dmitriy',
  surname: 'Petrov'
};

let response = await fetch('/article/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);
```
