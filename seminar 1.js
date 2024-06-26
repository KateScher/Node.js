// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "text/html; charset=utf-8",
//   });
//   res.end("<h1>Да</h1>");
//   console.log("Запрос получен");
// });

// const port = 3100;

// server.listen(port); // запустим скрипт через node ./scripts.js / в браузере 127.0.0.1:3000 проверим
///////////////////

const http = require("http");

const server = http.createServer((req, res) => {
  // res.writeHead(200, {
  //   "Content-Type": "text/html; charset=utf-8",
  // });
  // res.end("<h1>Да</h1>");
  // console.log("Запрос получен");
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.end('<a href="./about">Перейти на страницу обо мне!</a>');
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.end('<a href="/">Перейти на страницу главная!</a>');
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.end("<h1>Страница 404</h1>");
  }
});

const port = 3200;

server.listen(port);
