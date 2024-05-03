// Урок 1. Введение в Node.js
// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require("http");
let countOne = 0;
let countTwo = 0;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    countOne++;
    res.end(
      `<h1>Корневая страница</h1>
         <p>Просмотров: ${countOne}</p>
         <a href="/about">Ссылка на страницу /about</a>
         `
    );
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    countTwo++;
    res.end(
      `<h1>Страница about</h1>
         <p>Просмотров: ${countTwo}</p>
         <a href="/">Ссылка на страницу /</a>
         `
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
      `<h1>Ошибка 404</h1>
         <p>Страница не существует</p>
         `
    );
  }
});

server.listen("3200");
