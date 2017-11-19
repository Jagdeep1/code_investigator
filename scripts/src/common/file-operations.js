(function () {

  const glob = require('glob');
  const path = require('path');

  let fileList = [];

  function getFileListFromGlob(pattern) {
    return new Promise((resolve, reject) => {
      if (fileList.length === 0) {
        glob(pattern, {}, (err, data) => {
          if (err) {
            console.log('Error fetching file list: ', err);
            return reject(err);
          }
          fileList = data;
          return resolve(fileList);
        });
      } else {
        return resolve(fileList);
      }
    });
  }

  module.exports = {
    getFileListFromGlob: getFileListFromGlob
  };

}());