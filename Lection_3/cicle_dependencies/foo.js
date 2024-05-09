// Пример циклической зависимости (неверной)

const baz = require("./baz");

console.log(baz);

const world = "world";

module.exports = world;
