
(function () {

  'use strict';

  const validateConfig = require('./validate-config');
  const generateReport = require('./generate-report');

  function tslintJsonReport(userConfig) {

    const config = validateConfig(userConfig);
    generateReport(config);

  }

  module.exports = tslintJsonReport;

}());
