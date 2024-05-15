const fs = require("fs");

fs.appendFile("./test.txt", "console.log('Hello, World!!!')", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("The file was saved!");
  }
});
