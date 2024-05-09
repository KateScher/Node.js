// Задание №1
// Необходимо найти, установить и применить библиотеку, которая позволит
// избежать проблем со сложением и умножением чисел с плавающей запятой
// Необходимо вынести функцию .calculateResultSum() в отдельный файл, импортировать её в основной файл и использовать.
// Также необходимо вынести запуск скрипта в скрипты запуска NPM, для того, чтобы можно было запускать скрипт с помощью команды npm run start.
// import NP from 'number-precision' еще вариант добавления
const { calculateResultSum } = require("./calculateResultSum.js");

const color = require("colors");

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
console.log(total);
console.log(total > 50 ? color.red(total) : color.green(total));
