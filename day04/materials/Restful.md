7 принципов написания кода интерфейсов: \
`-` Client-Server. \
`-` Stateless. \
`-` Casheable. \
`-` Uniform Interface. \
`-` Layered System. \
`-` Code on Demand. \
`-` Starting with the Null Style. 

REST API основывается на HTTP (Hypertext Transfer Protocol). Изначально, данный протокол был создан для передачи гипертекста, сейчас же HTTP используется для транспортировки любых типов данных. 

Каждый ресурс на сервере в HTTP имеет свой уникальный URL-адрес в последовательном формате. Например, второй урок обучающего видео про Javascript будет храниться на сервере по адресу:
```
http://school25.ru/javascript/2. 
```

В REST API есть 4 метода HTTP, которые используют для взаимодействия с данными: \
`-` GET (получение данных) \
`-` DELETE (удаление данных) \
`-` POST (добавление данных) \
`-` PUT (частичное обновление данных) \
Такие запросы еще называют идентификаторами CRUD: create (создать), read (прочесть), update (обновить) delete (удалить). Это стандартный набор действий для работы с данными. 
