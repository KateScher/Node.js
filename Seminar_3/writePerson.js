/* Задание №2 
1. Создайте файл writePerson.js
2. Напишите код, который создаст файл person.json в директории 
запускаемого скрипта и запишет в файл следующий объект:
{
  "name": 'Ivan',
  "surname": 'Ivanov',
  "age": 30,
  "city": 'Moscow'
}
💡 Подсказки: 
- Для преобразования объекта в текст используйте функцию JSON.stringify()
- Для определения пути к файлу, используйте модуль path и его метод .join(),
а также глобальное свойство __dirname
- Используйте синхронный метод записи в файл */

const fs = require("fs");
const path = require("path");

const person = {
  name: "Ivan",
  surname: "Ivanov",
  age: 30,
  city: "Moscow",
};

// модуль fs для работы с файлами
fs.writeFileSync(
  path.join(__dirname, "person.json"),
  JSON.stringify(person, null, 2)
); // название создаваемого файла - person.json, null - чтобы ничего 'не прилетело в файл' и 2 - кол-во пробелов
