const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

const pathToFile = path.join(__dirname, "count.json");
let countData;

try {
  countData = JSON.parse(fs.readFileSync(pathToFile, "utf8"));
} catch (err) {
  countData = { homepage: 0, aboutpage: 0 };
  fs.writeFileSync(pathToFile, JSON.stringify(countData), "utf8");
}
function writeToJSON(path, data) {
  fs.writeFileSync(path, JSON.stringify(data), "utf8");
}

app.get("/", (req, res) => {
  countData.homepage++;
  writeToJSON(pathToFile, countData);
  res.send(
    `<h1>Корневая страница</h1><p>Просмотров: ${countData.homepage}</p><a href='/about'>Ссылка на страницу /about</a>`
  );
});

app.get("/about", (req, res) => {
  countData.aboutpage++;
  writeToJSON(pathToFile, countData);
  res.send(
    `<h1>СтраницаAbout</h1><p>Просмотров: ${countData.aboutpage}</p><a href='/'>Ссылка на страницу /</a>`
  );
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
