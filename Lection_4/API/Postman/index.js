// Воспользуемся Postman: сделаем простой http-сервер и с пом. Postman сделаем на него запрос

const express = require("express"); // импортируем экспресс
const app = express(); // создаем приложение экспресс

app.get("/", (req, res) => {
  // роут слэш "/"возвращает Hello
  res.send("<h1>Hello!</h1>");
});
app.listen(3000);
// теперь нужно перейти в postman  и создать get запрос
