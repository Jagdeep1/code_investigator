
(function () {

  'use strict';

  const fs = require('fs');
  const funkyLogger = require('../common/funky-logger');
  const npmRun = require('npm-run');
  const basePath = require('../../config/root.config').basePath;

  function invokeTSlint(cliArguments) {
    return new Promise((resolve, reject) => {
      npmRun.exec('tslint' + cliArguments, { cwd: basePath }, (err, stdout, stderr) => {
        if (err) {
          console.log('Error generating tslint report: ', err);
          return reject(err);
        }
        if (stdout.toString()) {
          console.info(stdout.toString());
        }
        if (stderr.toString()) {
          console.info(stderr.toString());
        }
        return resolve();
      });
    });
  }

  function fetchReportDetails(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.log('Error reading tslint report: ', err);
          return reject(err);
        }
        return resolve(JSON.parse(data || {}));
      });
    });
  }

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

    return invokeTSlint(cliArguments)
      .then(() => {
        return fetchReportDetails(config.jsonReport);
      });

  }

  module.exports = generateReport;

})();