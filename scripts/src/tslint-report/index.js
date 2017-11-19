
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

    console.info(funkyLogger.color('green', '\nStarting TSLint summary...'));

    console.info(funkyLogger.color('cyan', '\nvalidating config...'));
    const config = validateConfig(userConfig);
    console.info(funkyLogger.color('green', 'Config valid!'));

    console.info(funkyLogger.color('cyan', '\nFetching all files and generating schema...'));
    const fileList = fileOps.getFileListFromGlob(config.srcFiles);
    let tsLintSummary = new TsLintSummarySchema(fileList.length);
    console.info(funkyLogger.color('green', 'Schema generated!'));

    console.info(funkyLogger.color('cyan', '\nGenerating TSLint report...'));
    const tsLintDetails = generateReport(config);
    console.info(funkyLogger.color('green', 'TSlint report generated!'));

    console.info(funkyLogger.color('cyan', '\nPopulating schema with generated report...'));
    populateSummary(tsLintSummary, tsLintDetails);
    populateFileDetails(tsLintSummary, tsLintDetails);
    console.info(funkyLogger.color('green', 'Schema populated!'));

    console.info(funkyLogger.color('cyan', '\nWriting summary to file...'));
    fs.writeFileSync(config.finalReport, JSON.stringify(tsLintSummary), 'utf8');
    console.info(funkyLogger.color('green', 'Summary written to '+ config.finalReport));

    console.info(funkyLogger.color('green', '\nTSLint Summary complete!'));


  }

  module.exports = tslintSummaryReport;

}());
