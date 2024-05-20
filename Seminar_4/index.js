const express = require("express");
const joi = require("joi"); // для валидации объекта
const app = express();

const users = [];

let uniqueID = 0;

const userScheme = joi.object({
  firstName: joi.string().min(1).required(),
  lastName: joi.string().min(1).required(),
  age: joi.number().min(0).max(99).required(),
  city: joi.string().min(1),
});

app.use(express.json());
app.get("/users", (req, res) => {
  res.send({ users });
});
// Получение отдельного пользователя
app.get("/users/:id", (req, res) => {
  const userID = +req.params.id;
  const user = users.find((user) => user.id === userID);
  if (user) {
    res.send({ user });
  } else {
    res.status(404);
    res.send({ user: null });
  }
});
app.post("/users", (req, res) => {
  console.log(req.body);
  uniqueID += 1;
  users.push({
    id: uniqueID,
    ...req.body,
  });
  res.send({ id: uniqueID });
});

app.put("/users/:id", (req, res) => {
  const result = userScheme.validate(req.body); // здесь будет лежать результат валидации
  if (result.error) {
    // делаем проверку - если ошибка, то вернем ф-ю.
    return res.status(404).send({ error: result.error.details });
  }
  // обновление пользователя
  const userID = +req.params.id;
  const user = users.find((user) => user.id === userID);
  if (user) {
    const { firstName, lastName, age, city } = req.body;
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.city = city;
    res.send({ user });
  } else {
    res.status(404);
    res.send({ user: null });
  }
});

app.delete("/users/:id", (req, res) => {
  // удаление пользователя
  const userID = +req.params.id;
  const user = users.find((user) => user.id === userID);
  if (user) {
    const userIndex = users.indexOf(user); // находим пользователей
    users.splice(userIndex, 1); // удаляем пользователя с данной позиции
    res.send({ user });
  } else {
    res.status(404);
    res.send({ user: null });
  }
});

app.listen(3000);
