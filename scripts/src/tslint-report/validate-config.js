
(function () {

  'use strict';

  const fs = require('fs');
  const funkyLogger = require('../common/funky-logger');
  const path = require('path');
  const defaultConfig = require('../../config/tslint-report/tslint-config.json');
  const basePath = require('../../config/root.config').basePath;

  function validateConfig(config) {

    let extendedConfig = {};

    function recursiveMkDir(outDir) {
      let folders = outDir.split('/');
      let folderPath = basePath;
      folders.forEach((folder) => {
        if (folder) {
          folderPath = path.join(folderPath + '/' + folder);
          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
          }
        }
      });
    }

    if (config) {
      if (config.tslint && !fs.existsSync(path.join(basePath, config.tslint))) {
        console.info(funkyLogger.color('yellow', 'info: tslint.json not found, using default config file'));
        config.tslint = defaultConfig.tslint;
      }
      if (config.typeCheck && !fs.existsSync(path.join(basePath, config.tsconfig))) {
        console.info(funkyLogger.color('yellow', 'info: tsconfig.json not found, type checking will be disabled'));
        config.typeCheck = defaultConfig.typeCheck;
      }
      extendedConfig.tslint = config.tslint || defaultConfig.tslint;
      extendedConfig.srcFiles = config.srcFiles || defaultConfig.srcFiles;
      extendedConfig.outDir = config.outDir || defaultConfig.outDir;
      extendedConfig.json = config.json || defaultConfig.json;
      extendedConfig.tsLintSummary = config.tsLintSummary || defaultConfig.tsLintSummary;
      extendedConfig.breakOnError = config.breakOnError;
      extendedConfig.typeCheck = config.typeCheck;
      extendedConfig.tsconfig = config.tsconfig;
      if (extendedConfig.json === extendedConfig.tsLintSummary) {
        extendedConfig.json = defaultConfig.json;
        extendedConfig.tsLintSummary = defaultConfig.tsLintSummary;
      }
    } else {
      extendedConfig = defaultConfig;
    }

    recursiveMkDir(extendedConfig.outDir);

    extendedConfig.tslint = path.join(basePath, extendedConfig.tslint);
    extendedConfig.tsconfig = path.join(basePath, extendedConfig.tsconfig);
    extendedConfig.srcFiles = path.join(basePath, extendedConfig.srcFiles);
    extendedConfig.outDir = path.join(basePath, extendedConfig.outDir);

    extendedConfig.jsonReport = path.join(extendedConfig.outDir, extendedConfig.json);
    extendedConfig.finalReport = path.join(extendedConfig.outDir, extendedConfig.tsLintSummary);


    console.info('Config used for generation of report: ');
    console.info(funkyLogger.color('blue', 'Path to tslint.json: '),
      funkyLogger.color('magenta', extendedConfig.tslint));
    if (extendedConfig.typeCheck) {
      console.info(funkyLogger.color('blue', 'Path to tsconfig.json: '),
        funkyLogger.color('magenta', extendedConfig.tsconfig));
    }
    console.info(funkyLogger.color('blue', 'Source files to be linted: '),
      funkyLogger.color('magenta', extendedConfig.srcFiles));
    console.info(funkyLogger.color('blue', 'Output path for JSON report: '),
      funkyLogger.color('magenta', extendedConfig.finalReport));

    return extendedConfig;

  }

  module.exports = validateConfig;

}());
