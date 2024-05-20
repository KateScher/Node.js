// Handlebars имеет циклы для перебора массива и шенерировать, например, списки
// в html
const handlebars = require("handlebars");

const items = [
  { name: "first item", number: 3 },
  { name: "second item", number: 5 },
];

// ключевое слово each  - для перебора массива
const template = handlebars.compile(
  "{{#each items}} <p>{{this.name}} {{this.number}}</p> {{/each}}"
);

console.log(template({ items })); // <p>first item 3</p>  <p>second item 5</p>
