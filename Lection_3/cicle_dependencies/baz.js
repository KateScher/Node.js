// Пример циклической зависимости (неверной)

const foo = require("./foo");

console.log(foo);

const hello = "hello";

module.exports = hello;
