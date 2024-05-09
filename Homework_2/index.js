/* Урок 2. Введение в NPM
Написать свою собственную библиотеку и опубликовать в NPM.

Что нужно помнить при реализации:

— Ваш модуль должен обязательно экспортировать функции которые будут полезны вашим пользователям с помощью modules.exports
— Не забудьте указать в package.json в поле main файл, который будет основным в вашей библиотеке
— Обязательно создайте и опишите README.md файл в корне вашего проекта
— Если у вас есть репозиторий в github или gitlab, опубликуйте туда ваш код и в package.json укажите ссылку на репозиторий в поле repository
— Протестируйте работу вашей библиотеки после публикации. Попробуйте установить её в любом другом проекте с помощью npm i имявашейбиблиотеки и попробуйте ее использовать.

Формат сдачи задания:
— Достаточно прислать ссылку на сайт https://npmjs.com/ на вашу библиотеку.

Идеи для библиотеки:

— Библиотека для генерации случайных данных, таких как имена, адреса, даты, числа и т.д. Это может быть полезно для тестирования или создания заглушек данных.
— Библиотека для работы с математикой: например функции для решения квадратных уравнений.
— Библиотека для генерации паролей, которая позволяет генерировать случайные и безопасные пароли. Можно реализовать методы для указания длины пароля, использования различных типов символов (буквы, цифры, специальные символы) и т.д.*/
// -----------------------------/
// Краткий анализ предприятия на предмет возможности привлечения инвестиций

// Расчет коэф-та текущей ликвидности = оборотные активы / краткосрочные обязательства:

function calcLiquidity() {
  const currentAssets = +prompt(
    "Введите количество оборотных активов из баланса: "
  );
  const shortTermLiabilities = +prompt(
    "Введите количество краткосрочных обязательств из баланса: "
  );
  const currentLiquidityRatio = currentAssets / shortTermLiabilities;
  if (currentLiquidityRatio < 1.5) {
    alert(
      "Показатель текущей ликвидности составляет " +
        `${+currentLiquidityRatio.toFixed(2)} ` +
        "Компания не может вовремя оплачивать текущие долги. Предприятие финансово неустойчиво и не является привлекательным для инвесторов как объект инвестиций."
    );
  } else if (currentLiquidityRatio > 2.5) {
    alert(
      "Коэффициент ликвидности выше нормы, оборотные активы компании не используются с полной отдачей."
    );
  } else {
    alert(
      `${+currentLiquidityRatio.toFixed(2)}` +
        " рублей оборотных активов приходится на каждый рубль краткосрочных обязательств. Компания способна быстро погасить все текущие долги по требованию кредиторов, является привлекательным объектом для инвесторов."
    );
  }
}

module.exports = { calcLiquidity };
