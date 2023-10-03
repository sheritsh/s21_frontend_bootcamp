```
import React from 'react';
import Pokemon from './Pokemon';
function App() {
  const pokemons = [
    { name: 'Slowpoke', power: 360 },
    { name: 'Pikachu', power: 60},
    { name: 'Psyduck', power: 196 },
  ];
  return (
    <div className="App">
      {pokemons.map(({ name, power, img }) => (
        <Pokemon
          key={name}
          name={name}
          power={power}
          img={img}
        />
      ))}
    </div>
  );
}
```
У каждого элемента массива должен быть ключ (key). «Ключ» – это специальный строковый атрибут, который нужно указывать при создании списка элементов.
Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени. Лучший способ выбрать ключ – это использовать строку, которая будет явно отличать элемент списка от его соседей. Чаще всего вы будете использовать ID из ваших данных как ключи.

Пример условного рендеринга:
```
import React from 'react';

function Pokemon({ name, power = 0, img }) {
  return (
    <>
      <h2>{name}</h2>
      {
        power
          ? (
            <strong>
              Сила:
              {' '}
              {power}
              {' '}
              гектограмм
            </strong>
          )
          : <strong>Сила не определена</strong>
      }
    </>
  );
}
```
