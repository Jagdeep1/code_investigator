(function () {

  const glob = require('glob');
  const path = require('path');

  let fileList = [];

  function getFileListFromGlob(pattern) {
    if (fileList.length === 0) {
      fileList = glob.sync(pattern);
    }
    return fileList;
  }

  function readFile() {

  }

  module.exports = {
    getFileListFromGlob: getFileListFromGlob
  };

}());