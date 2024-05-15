const fs = require("fs"); // перезапись содержимого файла

fs.writeFile("./test.txt", "console.log('Hello, World!!!')", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("The file was saved!");
  }
});
