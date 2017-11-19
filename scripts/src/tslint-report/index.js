
(function () {

  'use strict';

  const validateConfig = require('./validate-config');
  const generateReport = require('./generate-report');
  const TsLintSummarySchema = require('./tslint-summary.model');
  const fileOps = require('../common/file-operations');
  const populateSummary = require('./populate-summary');
  const populateFileDetails = require('./populate-file-details');
  const funkyLogger = require('../common/funky-logger');
  const fs = require('fs');

  function tslintSummaryReport(userConfig) {
    return new Promise((resolve, reject) => {

      let tsLintSummary;
      console.info(funkyLogger.color('green', '\nStarting TSLint summary...'));

      console.info(funkyLogger.color('cyan', '\nvalidating config...'));
      const config = validateConfig(userConfig);
      console.info(funkyLogger.color('green', 'Config valid!'));

      console.info(funkyLogger.color('cyan', '\nFetching all files and generating schema...'));
      return fileOps.getFileListFromGlob(config.srcFiles)
        .then((fileList) => {
          tsLintSummary = new TsLintSummarySchema(fileList.length);
          console.info(funkyLogger.color('green', 'Schema generated!'));

          console.info(funkyLogger.color('cyan', '\nGenerating TSLint report...'));
          return generateReport(config);
        })
        .then((tsLintDetails) => {
          console.info(funkyLogger.color('green', 'TSlint report generated!'));

          console.info(funkyLogger.color('cyan', '\nPopulating schema with generated report...'));
          populateSummary(tsLintSummary, tsLintDetails);
          populateFileDetails(tsLintSummary, tsLintDetails);
          console.info(funkyLogger.color('green', 'Schema populated!'));

          console.info(funkyLogger.color('cyan', '\nWriting summary to file...'));
          fs.writeFile(config.finalReport, JSON.stringify(tsLintSummary), 'utf8', (err) => {
            if (err) {
              console.log('Error writing TSLint summary: ', err);
              return reject(err);
            }
            console.info(funkyLogger.color('green', 'Summary written to ' + config.finalReport));
            console.info(funkyLogger.color('green', '\nTSLint Summary complete!'));
            return resolve();

          });

        })
        .catch((err) => {
          return reject(err);
        });
    });
  }

  module.exports = tslintSummaryReport;

}());
