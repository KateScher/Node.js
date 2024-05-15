// Обработка ошибок синхронных функций
const fs = require("fs");

try {
  const result = fs.readFileSync(__filename, "utf-8");
  console.log(result);
} catch (err) {
  console.error(err);
}

try {
  fs.appendFileSync(__filename, '\nconsole.log("Hello, World!!!")');
  console.log("The file was saved!");
} catch (err) {
  console.error(err);
}

console.log("Hello, World!!!")