// Сервер с возвратом html файлов

const express = require("express");
const path = require("path");

const app = express();
// Для чтени статичных файлов (на сервере) => в браузере localhost:3400/about.html
app.use(express.static("static"));

// Корневая страница
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static/index.html"));
});

const port = 3400;

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
