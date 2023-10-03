```
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Отправлена форма.');
  }

  return (
    <form оnSubmit={handleSubmit}>
      <button type="submit">Отправить</button>
    </form>
  );
}
```
В приведённом выше коде e — это синтетическое событие. React определяет синтетические события в соответствии со спецификацией W3C, поэтому не волнуйтесь о кроссбраузерности. События React работают не совсем как нативные. Изучите [руководство о SyntheticEvent](https://ru.reactjs.org/docs/events.html), чтобы узнать о них больше.

## useRef 

```
const refContainer = useRef(initialValue)
```

useRef возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени жизни компонента.

Обычный случай использования — это доступ к потомку в императивном стиле:

```
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` указывает на смонтированный элемент `input`
    inputEl.current.focus();
     <button>Установить фокус на поле ввода</button>
  };
  return (
  <input ref={inputEl} type="text" />
  <button оnClick={onButtonClick}>Установить фокус на поле ввода</button>
  );
}
```

По сути, useRef похож на «коробку», которая может содержать изменяемое значение в своём свойстве .current.
