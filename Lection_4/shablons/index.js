// Пример с обновлением статей с использованием конкатенации.
// Минусы такого подхода - нужно писать много кода, код сложно поддерживать, нет подсветки синтаксиса.
// Лучше использовать шаблонизацию (см. в др. примерах)

const express = require("express");
const app = express();

const articles = [
  { title: "Article 1", description: "First awesome article" },
  { title: "Article 2", description: "Second awesome article" },
  { title: "Article 3", description: "Third awesome article" },
];

app.get("/", (req, res) => {
  let html = "<h1>Article list</h1>";
  // Перебираем статьи
  for (const articleData of articles) {
    html += `<h2>${articleData.title}</h2>`;
    html += `<p>${articleData.description}</p>`;
  }

  res.send(html);
});
app.listen(3000);
