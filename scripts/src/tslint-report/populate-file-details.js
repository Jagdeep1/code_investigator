
(function () {

  const FileDetailsSchema = require('./file-details.model');

  function populateFileDetails(tslintSummary, tsLintDetails) {

    let fileDetails = {};
    let filesCovered = [];

    function newFileDetails(countKey, arrayKey, value) {
      fileDetails[value.name] = new FileDetailsSchema(value.name);
      fileDetails[value.name][countKey]++;
      fileDetails[value.name][arrayKey].push({
        ruleName: value.ruleName,
        description: value.failure,
        position: {
          line: value.startPosition.line,
          col: value.startPosition.character
        }
      });
    }

    function mapDetails(countKey, arrayKey, value) {
      fileDetails[value.name][countKey]++;
      fileDetails[value.name][arrayKey].push({
        ruleName: value.ruleName,
        description: value.failure,
        position: {
          line: value.startPosition.line,
          col: value.startPosition.character
        }
      });
    }

    tsLintDetails.forEach((value) => {
      if (filesCovered.includes(value.name)) {
        fileDetails[value.name].total++;
        if (value.ruleName === 'ERROR') {
          mapDetails('totalErrors', 'errors', value);
        } else {
          mapDetails('totalWarnings', 'warnings', value);
        }
      } else {
        filesCovered.push(value.name);
        if (value.ruleName === 'ERROR') {
          newFileDetails('totalErrors', 'errors', value);
        } else {
          newFileDetails('totalWarnings', 'warnings', value);
        }
      }
    });

    for (let key in fileDetails) {
      tslintSummary.files.push(fileDetails[key]);
    }

  }

  module.exports = populateFileDetails;

}());
