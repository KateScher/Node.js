const express = require("express"); // импорт экспресс
const { engine } = require("express-handlebars"); // импорт библиотеки экспресс-хердлбарс, но не все, а только функцию engine

const app = express(); // создаем приложение express

// Далее указываем экспрессу, какой будет движок генерации html
app.engine("handlebars", engine()); // запусе метода engine (шаблонизатор, функция - engine())
app.set("view engine", "handlebars"); // установка окружения Express с пом. метода set()
app.set("views", "./views"); // директория для хранения шаблонов

const articles = [
  { title: "Article 1", description: "First awesome article" },
  { title: "Article 2", description: "Second awesome article" },
  { title: "Article 3", description: "Third awesome article" },
];

// Обработчик. В свойстве res применим метод render(название запускаемого файла без разрешения, далее - данные которые надо сгенерировать), который указывает, что мы хотим вернуть клиенту
app.get("/", (req, res) => {
  res.render("home", { layout: "index", title: "Home", articles });
});

app.listen(3000);
