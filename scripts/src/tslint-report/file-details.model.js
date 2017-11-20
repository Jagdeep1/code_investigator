(function () {
  
  function FileDetailsSchema(fileName) {
    this.fileName = fileName;
    this.total = 1;
    this.totalErrors = 0;
    this.totalWarnings = 0;
    this.errors = [];
    this.warnings = [];
  }

  module.exports = FileDetailsSchema;

}());