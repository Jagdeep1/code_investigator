
(function () {

  'use strict';

  const _ = require('lodash');
  const fs = require('fs');
  const funkyLogger = require('../common/funky-logger');
  const npmRun = require('npm-run');

  function generateReport(config) {
    let data = {};

    let cliArguments = ' --config "' + config.tslint + '"' +
      ' --format json' +
      ' --out "' + config.jsonReport + '"' +
      ' "' + config.srcFiles + '"';

    if (config.typeCheck) {
      cliArguments = cliArguments + ' --project ' + config.tsconfig
    }

    if (!config.breakOnError) {
      cliArguments = cliArguments + ' --force';
    }

    const result = npmRun.execSync('tslint' + cliArguments, { cwd: __dirname });
    if (result.toString()) {
      console.info(result.toString());
    }

    let rawData = JSON.parse(fs.readFileSync(config.jsonReport, 'utf8'));

    return rawData;

  }

  module.exports = generateReport;

})();