#  Day 03 - Frontend boot camp

## Contents

1. [Chapter I](#chapter-i) \
   1.1. [Способы адаптивной верстки](#способы-адаптивной-верстки) \
   1.2 [Flex](#flex) \
   1.3 [Grid](#grid) 
2. [Chapter II](#chapter-ii) \
   2.1. [Подключение JS к HTML-странице](#подключение-js-к-HTML-странице) \
   2.2 [Работа с DOM](#работа-с-dom) \
   2.3 [Обработка событий](#обработка-событий) \
   2.4 [Bootstrap](#bootstrap) 


## Chapter I
Адаптивная вёрстка меняет дизайн страницы в зависимости от поведения пользователя, платформы, размера экрана и ориентации девайса и является неотъемлемой частью современной веб-разработки. Она позволяет существенно экономить и не отрисовывать новый дизайн для каждого разрешения, а менять размеры и расположение отдельных элементов.
### Способы адаптивной верстки 

 Существуют несколько подходов к адаптивной верстке:
 1. Использование относительных величин для размеров и отступов.
 Относительные значения можно задавать для width, height, margin, padding и т. д.
 Самый известный способ задать относительный размер - указать значение в процентах.
 При этом значение высчитывается относительно родительского компонента.
 ```
 body {
   width:50%;
 }
 ```
Также существуют значения относительно размера экрана: \
`-` vw — 1% ширины окна. При уменьшении ширины окна уменьшается ширина, высота, шрифт элемента; \
`-` vh — 1% высоты окна. При уменьшении высоты окна уменьшается ширина, высота, шрифт элемента; \
`-` vmin — выбирается наименьшее из vw и vh; \
`-` vmax — выбирается наибольшее из vw и vh.

2. Использование медиа запросов.
Медиа-запросы — правила CSS, управляющие стилями элементов исходя из технических характеристик устройства. Эти конструкции помогают определить, какие элементы отображать на каком устройстве, а какие скрыть. 

```
.text {
  font-size: 14px;
}

@media (max-width: 480px) {
  .text {
    font-size: 16px;
  }
}
```

### Flex

CSS Flexbox — это технология для создания сложных гибких макетов за счёт правильного размещения элементов на странице. 
Flexbox состоит из гибкого контейнера (flex container) и гибких элементов (flex items). Гибкие элементы могут выстраиваться в строку или столбик, а оставшееся свободное пространство может распределяться между ними различными способами.

Модуль flexbox позволяет решать следующие задачи: \
`-` Располагать элементы в одном из четырех направлений: слева направо, справа налево, сверху вниз или снизу вверх. \
`-` Переопределять порядок отображения элементов. \
`-` Автоматически определять размеры элементов таким образом, чтобы они вписывались в доступное пространство. \
`-` Решать проблему с горизонтальным и вертикальным центрированием. \
`-` Переносить элементы внутри контейнера, не допуская его переполнения. \
`-` Создавать колонки одинаковой высоты.

Поэкспериментируйте с разнымы flex свойствами в этой [игре](https://flexboxfroggy.com/#ru).


### Grid

W3C описывает модуль CSS Grid Layout как систему двумерного макета, оптимизированного для дизайна пользовательского интерфейса. Главная идея модуля заключается в разделении страницы на строки и столбцы. В образовавшихся ячейках сетки можно помещать элементы, а для управления их размерами и расположением существуют специальные свойства модуля.

Хотя многие макеты могут быть отображены как с помощью Grid, так и с помощью Flexbox, у каждого есть свои особенности. 
Grid обеспечивает двухмерное выравнивание, использует нисходящий подход к макету, допускает явное перекрытие элементов и обладает более мощными связующими возможностями. 
Flexbox фокусируется на распределении пространства по оси, использует более простой восходящий подход к макету, может использовать систему переноса строк на основе размера контента для управления своей вторичной осью и опирается на базовую иерархию разметки для построения более сложных макетов.

Поэкспериментируйте с разнымы grid свойствами в этой [игре](https://cssgridgarden.com/#ru).

**Задание 1.** \
Вам необходимо сверстать калькулятор, используя модуль CSS Grid Layout. Вы должны получить следующий результат: \
<img width="386" alt="calculator" src="./misc/images/calculator.png">
   <br>

## Chapter II

### Подключение JS к HTML-странице

Самое первое, что нам нужно сделать, — это сообщить HTML-документу, что у нас есть некоторые скрипты, которые мы хотим использовать. 

Для начала создайте файл в той же папке, что и документ HTML, и сохраните его как myScript.js. Расширение .js показывает, что это файл JavaScript.

Чтобы связать myScript.js с index.html, добавьте следующую строку перед закрывающим тегом body:
```
<script type="text/javascript" src="myScript.js"></script>
```
Тег script предназначен для описания скриптов, может содержать ссылку на программу или ее текст на определенном языке.
Данный тег может располагаться в заголовке или теле HTML-документа в неограниченном количестве. В большинстве случаев местоположение скрипта никак не сказывается на работу программы. Однако скрипты, которые должны выполняться в первую очередь, обычно помещают в заголовок документа.

### Работа с DOM

DOM – это представление HTML-документа в виде дерева тегов.
В соответствии с объектной моделью документа («Document Object Model», коротко DOM), каждый HTML-тег является объектом. Вложенные теги являются «детьми» родительского элемента. Текст, который находится внутри тега, также является объектом.

Все эти объекты доступны при помощи JavaScript — мы можем использовать их для изменения страницы.
Например, document.body — объект для тега body. 

Если запустить этот код, то body станет красным на 3 секунды:
```
document.body.style.background = 'red'; // сделать фон красным

setTimeout(() => document.body.style.background = '', 3000); // вернуть назад
```

Работа большинства клиентских программ на языке JavaScript так или иначе связана с манипулированием элементами документа. В ходе выполнения эти программы могут использовать глобальную переменную document, ссылающуюся на объект Document. Однако, чтобы выполнить какие-либо манипуляции с элементами документа, программа должна каким-то образом получить или выбрать объекты Element, ссылающиеся на эти элементы документа.

Выборку элементов можно сформировать по следующим критериям: \
`-` по значению атрибута id; \
`-` по значению атрибута name; \
`-` по имени тега; \
`-` по имени класса или классов CSS; \
`-` по совпадению с определенным селектором CSS.

Для этого можно использовать встроенные методы объекта document(document.getElementById(id) или document.querySelector(selectors))

### Обработка событий 

Событие — это сигнал от браузера о том, что что-то произошло (например: щелчок мыши, нажатие клавиши на клавиатуре и др.). Все DOM-узлы подают такие сигналы (хотя события бывают и не только в DOM).
Событию можно назначить обработчик, то есть функцию, которая сработает, как только событие произошло.
Именно благодаря обработчикам JavaScript код может реагировать на действия пользователя.

Есть несколько способов назначить событию обработчик: \
`-` Использовать HTML-аттрибут.
```
<script>
  function sayThankYou() {
     alert('Спасибо');
  }
</script>

<input type="button" onclick="sayThankYou()" value="Сказать спасибо">
```

`-` Использовать свойства DOM-объекта
```
<input id="elem" type="button" value="Нажми меня!">
<script>
  const elem = document.querySelector('#elem')
  elem.onclick = function() {
    alert('Спасибо');
  };
</script>
```
Фундаментальный недостаток описанных выше способов назначения обработчика – невозможность повесить несколько обработчиков на одно событие.
Например, одна часть кода хочет при клике на кнопку делать её подсвеченной, а другая – выдавать сообщение.

Разработчики стандартов достаточно давно это поняли и предложили альтернативный способ назначения обработчиков при помощи специальных методов addEventListener и removeEventListener. Они свободны от указанного недостатка.

Синтаксис добавления обработчика:
```
element.addEventListener(event, handler, [options]);

element.addEventListener("click" , () => alert('Спасибо!'));
```

Чтобы хорошо обработать событие, могут понадобиться детали того, что произошло. Не просто «клик» или «нажатие клавиши», а также – какие координаты указателя мыши, какая клавиша нажата и так далее.
Когда происходит событие, браузер создаёт объект события, записывает в него детали и передаёт его в качестве аргумента функции-обработчику.

**Задание 2.** \
Отлично, у вас есть HTML-форма вашего калькулятора! Теперь вам надо реализовать функционал его работы. Напишите скрипт, который реализует все представленные в макете операции (сложение/вычитание/умножение/деление/стереть все)
<br>
### Bootstrap

CSS-фреймворк — фреймворк, созданный для упрощения работы верстальщика, быстроты разработки и исключения максимально возможного числа ошибок вёрстки (проблемы совместимости различных версий браузеров и т. д.). Данные фреймворки подразумевают использование различных подходов для корректного отображения сайтов на устройствах любого размера.
Многие разработчики предпочитают использование CSS-фреймворков, вместо прописывания всех стилей вручную.
[Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) легко и эффективно масштабирует ваш проект с одной базой кода — от телефонов и планшетов до настольных компьютеров.

Попробуйте подключить bootstrap к своей HTML-странице и поэкспериментируйте с [примерами](https://getbootstrap.com/docs/5.2/examples/).

**Задание 3.** \
Вы изучили работу с CSS-фреймворком Bootstrap.
Теперь вам надо улучшить вашу страничку калькулятораю
Добавьте header на странице, где будет 2 ссылки: \
`-` На страницу calculator, где будет ваш калькулятор. \
`-` На страницу Student Info. \
На странице Student info должны отображаться ваше Фото и информация о вас: \
`-` ФИО. \
`-` Стаж обучения. \
`-` Возраст.

Пожалуйста, оставьте обратную связь по проекту в [форме обратной связи.](https://forms.gle/2yCBCB4ekH5FEVzJ9)