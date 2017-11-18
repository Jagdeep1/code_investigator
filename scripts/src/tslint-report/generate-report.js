
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

    console.info(funkyLogger.color('cyan', 'Generating TSlint report.'));
    const result = npmRun.execSync('tslint' + cliArguments, { cwd: __dirname });
    console.info(result.toString());
    console.info(funkyLogger.color('green', 'Tslint report written to JSON'));

    console.info(funkyLogger.color('cyan', 'Reading json file...'));
    let rawData = JSON.parse(fs.readFileSync(config.jsonReport, 'utf8'));
    console.info(funkyLogger.color('green', 'File read complete.'));
    
    return rawData;

  }

  module.exports = generateReport;

})();