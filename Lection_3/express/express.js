// пример сервера на express

const express = require("express");

const app = express();
// Промежуточный обработчик
app.use((req, res, next) => {
  console.log("Поступил запрос", req.method, req.url);
  next();
});

// Корневая страница
app.get("/", (req, res) => {
  res.send("<h1>Добро пожаловать на мой сайт!</h1>");
});

// Бывает несколько обработчиков, например, с еще одной страницей, напр., "Обо мне"
// в браузере localhost:3400/about
app.get("/about", (req, res) => {
  res.send("<h1>Страница обо мне!</h1>");
});

const port = 3400;

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
