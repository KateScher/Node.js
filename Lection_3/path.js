// path - модуль для работы с путями в файловой системе
const path = require("path");

// join - выводит в консоль путь
console.log(path.join("/User/Student", "Desktop/index.js"));
// parse - выводит в консоль объект пути
console.log(path.parse("/User/Student/Desktop/index.js"));
// dirname - выводит в консоль путь к директории, убрав название файла
console.log(path.dirname("/User/Student/Desktop/index.js"));
// extname - выводит в консоль расширение файла .js
console.log(path.extname("/User/Student/Desktop/index.js"));
