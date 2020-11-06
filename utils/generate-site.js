const fs = require('fs');

// Write file:
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Team roster created!'
      });
    });
  });
};

module.exports = writeFile;