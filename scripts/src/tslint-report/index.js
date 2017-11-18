
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

  function tslintJsonReport(userConfig) {

    const config = validateConfig(userConfig);
    
    const fileList = fileOps.getFileListFromGlob(config.srcFiles);

    let tsLintSummary = new TsLintSummarySchema(fileList.length);

    const tsLintDetails = generateReport(config);

    populateSummary(tsLintSummary, tsLintDetails);
    populateFileDetails(tsLintSummary, tsLintDetails);

    console.info(funkyLogger.color('cyan', 'Writing file-wise data...'));
    fs.writeFileSync(config.fileWiseReport, JSON.stringify(tsLintSummary), 'utf8');
    console.info(funkyLogger.color('green', 'Data write complete.'));

    console.info(funkyLogger.color('green', 'TSLint html report generated and written to file'));


  }

  module.exports = tslintJsonReport;

}());
