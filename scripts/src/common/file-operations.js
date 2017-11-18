(function () {

  const glob = require('glob');
  const path = require('path');
  const basePath = require('../../config/root.config').basePath;
  
  let fileList = [];

  function getFileListFromGlob(pattern) {
    if (fileList.length === 0) {
      fileList = glob.sync(path.join(basePath, pattern));
    }
    return fileList;
  }

  function readFile() {

  }

  module.exports = {
    getFileListFromGlob: getFileListFromGlob
  };

}());