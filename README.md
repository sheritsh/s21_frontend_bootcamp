#  Day 02 - Frontend boot camp

## Contents

1. [Chapter I](#chapter-i) \
   1.1. [HTML](#html) \
   1.2 [Анатомия HTML-элемента](#анатомия-HTML---элемента) 
2. [Chapter II](#chapter-ii) \
   2.1.[CSS](#css) \
   2.2 [CSS селекторы](#css-селекторы) \
   2.3 [Специфичность](#специфичность) \
   2.4 [Подключение стилей к HTML-странице](#подключение-стилей-к-HTML---странице) 


## Chapter I


### HTML 
HTML (HyperText Markup Language, язык разметки гипертекста) задаёт структуру содержимого и его смысл, определяя такой контент как, к примеру, заголовки, абзацы, маркированные списки или изображения. HTML **не является языком программирования**, это язык разметки, и используется, чтобы сообщать вашему браузеру как отображать веб-страницы, которые вы посещаете. HTML состоит из ряда **элементов**, которые вы используете, чтобы вкладывать или оборачивать различные части контента, чтобы заставить контент отображаться или действовать определённым образом. **Теги** могут сделать слово или изображение ссылкой на что-то ещё, могут сделать слова курсивом, сделать шрифт больше или меньше и так далее.

### Анатомия HTML-элемента 

![anatomy-of-an-HTML---element](https://user-images.githubusercontent.com/48245816/168473496-5f409738-59e4-4aca-b177-940dbb5614be.png)

Глаными частями HTML-элемента являются: \
`-` Открывающтй тег: открывающий тег указывает, где элемент начинается или начинает действовать. \
`-` Закрывающий тег: закрывающий элемент указывает, где элемент заканчивается. \
`-` Контент: Это контент элемента, который в данном случае является просто текстом (контентом может быть и другой HTML-элемент). 

Элементы также могут иметь атрибуты.
Атрибуты являются свойствами, применяемыми для предоставления дополнительной информации об элементе. Наиболее распространённые атрибуты: \
`-` id \
`-` class \
`-` href \
`-` src

Теперь вы умеете создавать HTML-элементы, однако они не очень полезны сами по себе. 
Давайте рассмотрим как [отдельные элементы объединяются в целую HTML-страницу](./materials/Html_page.md).

**Задание 1.**

Это реальное тестовое задание для начинающего верстальщика. Данный вам [pdf-документ](./materials/HTML-junior.pdf) перевести в html страницу. CSS использовать не нужно. Все логические элементы выделяем семантически правильными тегами. Ссылки должны быть ссылками (```<a>```), списки - списками (```<ul, ol>```) и т.д.;
Текст, выделенный желтым цветом, обернуть как цитату;
Заголовки использовать в соответствии с их уровнем (```<h1..h6>```).

[Выполняйте задание здесь](./src//chapter_1/index.html).
<br>
   
## Chapter II

### CSS 
CSS (каскадные таблицы стилей) используется для стилизации и компоновки веб-страниц — например, для изменения шрифта, цвета, размера и интервала содержимого, разделения его на несколько столбцов или добавления анимации и других декоративных элементов. CSS — это язык на основе правил: вы задаёте правила, определяющие группы стилей, которые должны применяться к определённым элементам или группам элементов на вашей веб-странице.

### CSS селекторы

Селектор определяет, на какой именно элемент или элементы в HTML нацелиться и применить к ним стили. Селекторы могут включать в себя комбинацию различных показателей для выбора уникальных элементов, в зависимости от того, насколько конкретными мы желаем быть. 

Пример простого CSS правила:

```
p {
    color: green;
    font-size: 16px;
}
```
В данном примере мы говорим, что хотим, чтобы все параграфы на странице были зеленого цвета и имели размер шрифта в 16px.

Существуют разные [типы селекторов](./materials/Css_selectors.md).
Также селекторы могут быть составными, такие селекторы позволяют легко обратиться к потомку или соседнему элементу блока.  

### Специфичность

Специфичность — это способ, с помощью которого браузеры определяют какие значения свойств CSS наиболее соответствуют элементу и, следовательно, будут применены. Специфичность основана на правилах соответствия, состоящих из селекторов CSS различных типов.
Специфичность представляет собой вес, придаваемый конкретному правилу CSS.

В следующем списке типы селекторов расположены по убыванию специфичности: \
`-` Селектор по идентификатору. \
`-` Селектор по классу. \
`-` Селектор по типу.

Важное исключение из правил **!important**. Когда при объявлении стиля используется модификатор !important, это объявление получает наивысший приоритет среди всех прочих объявлений.

Также важно помнить, что так называемые inline стили (стили, указанные непосредственно внутри HTML-тега) имеют специфичность выше css селекторов.

### Подключение стилей к HTML-cтранице

Самое первое, что нам нужно сделать, — это сообщить HTML-документу, что у нас есть некоторые правила CSS, которые мы хотим использовать. 

Для начала создайте файл в той же папке, что и документ HTML, и сохраните его как styles.css. Расширение .css показывает, что это файл CSS.

Чтобы связать styles.css с index.html, добавьте следующую строку где-то внутри<head> HTML документа:
```
<link rel="stylesheet" href="styles.css">
```
Элемент <link> сообщает браузеру, что у нас есть таблица стилей, используя атрибут rel и местоположение этой таблицы стилей в качестве значения атрибута href. 
   
   
   **Задание 2.** 

 Вам необходимо сверстать форму входа в приложение:
   
 <img width="386" alt="calculator" src="https://user-images.githubusercontent.com/48245816/185938421-802cb9c2-ab64-4143-815d-0544052ecd15.png">
   <br>
Цвета можете подбирать по собственному усмотрению, главное, чтобы композиция макета не нарушалась.
 <br>

<br>
Пожалуйста, оставьте обратную связь по проекту в [форме обратной связи.](https://forms.gle/SQMgH5R8iekvdvDg7)
