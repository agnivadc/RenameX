const fs = require("fs");

const replaceThis = "agniva";
const replaceWith = "Neil";
const preview = true;
try {
  fs.readdir("data", (err, data) => {
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let newFile = "data/" + item.replaceAll(replaceThis, replaceWith);
      if (!preview) {
        fs.rename("data/" + item, newFile, () => {
          console.log("Rename success");
        });
      } else {
        console.log("data/" + item + " will be renamed to " + newFile);
      }
    }
  });
} catch (err) {
  console.error(err);
}
