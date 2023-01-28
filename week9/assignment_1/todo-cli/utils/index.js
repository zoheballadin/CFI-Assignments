import fs from "fs";

function timer(time) {
  return new Promise((resolve, reject) => {
    if (time < 0 || !time) {
      reject("Milliseconds are required");
    }
    setTimeout(() => {
      resolve();
    }, time);
  });
}

let readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

let writeFile = (path,content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path,content, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

var randomStringGenerator = length =>{
  var alphanum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiJklmnopqrstuvwxyz0123456789";

    var str = "";

    for (var i = 0; i < length; i++) {
      var index = Math.floor(Math.random() * alphanum.length);
      str += alphanum[index];
    }

    return str;

}

export { timer, readFile, writeFile , randomStringGenerator};
