```
class SimpleDate {
  constructor (year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  toString () {
    return `${this.day}/${this.month}/${this.year}`;
  }
}

const today = new SimpleDate(2017, 1, 28)
console.log(today.toString())
```
С помощью слова class мы описали новый класс. Также мы добавили метод constructor, который принимает year, month, day и записывает их в **this**. Мы создали переменную today, которая является экземпляром класса SimpleDate.Данный класс имеет 3 поля и метод toString.

