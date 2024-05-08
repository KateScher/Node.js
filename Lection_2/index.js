const uuid = require("uuid");
const hello = require("./hello"); // экспорт из файла hello

const id = uuid.v4();

console.log(id);

hello.sayHello();
