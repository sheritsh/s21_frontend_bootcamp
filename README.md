#  Day 05 - Frontend boot camp

## Contents

1. [Chapter I](#chapter-i) \
   1.1. [Шаблонизаторы](#шаблонизаторы) \
   1.2 [Fetch API](#fetch-api) 
2. [Chapter II](#chapter-ii) \
   2.1. [Cookie](#cookie) \
   2.2. [Сессии](#сессии) 

## Chapter I
Сегодня мы рассмотрим что такое шаблонизаторы для HTML и какие преимущества их использования. Научимся отправлять запросы на сервер с клиента. Узнаем о куках и как работать с сессиями в express.

### Шаблонизаторы
Шаблонизатор — это инструмент, который позволяет проще организовывать разметку, связывать её с данными, а также позволяет создавать переиспользуемые компоненты.

Для работы с движками представлений в Express определено ряд глобальных настроек, которые мы можем установить. Прежде всего это настройка view engine, которая устанавливает используемый движок представлений, и views, которая устанавливает путь к папке с представлениями внутри проекта (если этот параметр не установлен, то по умолчанию используется папка с именем views).

### HandleBars

Для работы с представлениями установим пакет hbs в проект.
Чтобы установить Handlebars в качестве движка представлений в Express, вызывается функция:
```
app.set('view engine', 'hbs')
```

Пример простого рендера можете посмотреть в [этом файле](materials/simple_handlebars/app.js) .

Так же handlebars предоставляет различные конструкции, которые позволяют перебирать массив данных прямо в html шаблоне или реализовывать условный рендеринг. Подробнее об этих конструкция можно узнать [тут](https://handlebarsjs.com/guide/builtin-helpers.html).

И еще много чего интересно можете узнать на [официальном сайте handlebars](https://handlebarsjs.com/guide/)

**Упражнение 1.** 

Вчера вы разработали сервис для ресторана, давайте сделаем UI представление для него.[В приложении должно быть 4 страницы](./src/chapter_1/Exercise_1.md)
Если вы не успели выполнить задания вчера, не беда, [вот ссылка на тз](./src/chapter_1/Exercise_1_TZ.md), сделайте это сейчас!

### Fetch API

JavaScript может отправлять сетевые запросы на сервер и подгружать новую информацию по мере необходимости.

Например, мы можем использовать сетевой запрос, чтобы: \
`-` Загрузить информацию о пользователе. \
`-` Запросить последние обновления с сервера. 

Для сетевых запросов из JavaScript есть широко известный термин «AJAX» (аббревиатура от Asynchronous JavaScript And XML). XML мы использовать не обязаны, просто термин старый, поэтому в нём есть это слово. Возможно, вы его уже где-то слышали.

Есть несколько способов делать сетевые запросы и получать информацию с сервера.
Одним из которых является метод **fetch**. Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP. Он также предоставляет глобальный метод fetch(), который позволяет легко и логично получать ресурсы по сети асинхронно.

[Базовый синтаксис](./materials/Fetch.md).

## Chapter II

### Cookie

**Cookie** (web cookie, куки браузера) - это небольшой фрагмент данных, которые хранятся непосредственно в браузере. Браузер может сохранить этот фрагмент у себя и отправлять на сервер с каждым последующим запросом. Это, в частности, позволяет узнать, с одного ли браузера пришли несколько запросов (например, для аутентификации пользователя). 

Куки часто используются для: \
`-` Управления сеансом (логины, корзины для виртуальных покупок). \
`-` Персонализации (пользовательские предпочтения). \
`-` Трекинга (отслеживания поведения пользователей).

Резюмируем о cookie: \
`-` Информация в виде ключ-значение, хранится в браузере. \
`-` Привязана к домену. \
`-` Бывают HTTP-only, недоступные для JS.

Как установить cookie? Очень просто: \
`-` Сервер – с помощью заголовка. \
`-` Клиент – с помощью JS.

Для работы с cookie на сервере мы будем использовать библиотеку cookie-parser.

### Сессии

Веб-приложение основано на протоколе HTTP. HTTP - это протокол без состояния, что означает, что в конце каждого цикла запроса и ответа клиент и сервер забывают друг о друге.

Именно здесь на помощь приходит сессия. Сессия содержит уникальные данные о клиенте, позволяющие серверу отслеживать состояние пользователя. При аутентификации на основе сессии состояние пользователя хранится в памяти сервера или в базе данных.

Как работают сессии?
Когда клиент делает запрос на вход на сервер, сервер создает сессию и хранит ее на стороне сервера. Когда сервер отвечает клиенту, он отправляет cookie. Этот файл cookie будет содержать уникальный идентификатор сессии, сохраненный на сервере, который теперь будет храниться на клиенте. Этот файл cookie будет отправляться при каждом запросе к серверу.
Мы используем этот идентификатор сессии и ищем сессию, сохраненную в базе данных или в хранилище сессий, чтобы поддерживать соответствие один к одному между сессией и cookie. Это позволит сделать соединения по протоколу HTTP с сохранением состояния.

Для работы с сессиями на express на понадобятся следующие библиотеки: \
`-` express-session \
`-` session-file-store \
`-` И все тот же cookie-parser

Пример кода создания сессии при логине вы можете найти в [репозитории express-session](https://github.com/expressjs/session).

**Упражнение 2.** 

Вы почти закончили ваше приложение! Остально сделать его чуть более правдоподобным. Модель user в БД необходимо расширить и добавить поля username и login. Добавьте еще две страницы в ваше приложение. На этих страницах будут отображаться форма регистрации/авторизации пользователя. Пользователь может зарегистрироваться как официант, или как admin. В зависимости от типа пользователя в приложении будут доступны разные страницы.[Роли пользователей](./src/chapter_2/Exercise_2.md)

>Пожалуйста, оставьте обратную связь по проекту в [форме обратной связи.](https://forms.gle/8mze3QkF7ubaNWc3A)
