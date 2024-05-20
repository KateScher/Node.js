// Использование Handlebars в express
// Рассмотрим файл сервера - этот код позволяет вывести список статей, информация о которых хранится в массиве.
// Нижеуказанный вариант также не совсем прост, и для облегчения написания кода, существует библиотека express-handlebars (см. в папке express_handlebars)

// Импортируем 4 модуля
const fs = require("fs");
const path = require("path");

const express = require("express");
const handlebars = require("handlebars");

const app = express();

const articles = [
  { title: "Article 1", description: "First awesome article" },
  { title: "Article 2", description: "Second awesome article" },
  { title: "Article 3", description: "Third awesome article" },
];
// Обработчик запросов. Через метод .join модуля path объединяем путь к директории скрипта и путь к файлу, в кот. хранится шаблон Handlebars, - позволяет получить полный путь к файлу шаблона.
app.get("/", (req, res) => {
  const pathToTemplate = path.join(__dirname, "/templates/home.handlebars"); // конкатенация пути
  // Загружается файл шаблона с пом.метода .readFile() модуля fs
  fs.readFile(pathToTemplate, "utf-8", (err, data) => {
    if (err) {
      res.status(500);
      res.send(err.message);
    } else {
      const template = handlebars.compile(data);
      res.send(template({ articles })); // передаем массив
    }
  });
});

app.listen(3000);
