// Пример применения шаблонизатора handlebars

const handlebars = require("handlebars");

const template = handlebars.compile("<p>{{someVar}}</p>"); // строка с шаблоном

const result = template({ someVar: "Hello!" });

console.log(result);
