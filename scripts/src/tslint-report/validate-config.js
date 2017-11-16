
(function () {

  'use strict';

  const fs = require('fs');
  const funkyLogger = require('../common/funky-logger');
  const path = require('path');
  const defaultConfig = require('../../config/tslint-report/tslint-config.json');

  function validateConfig(config) {

    // Make paths relative to root.
    const basePath = path.join(__dirname, '..', '..', '..');
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
      if (config.tslint && !fs.existsSync(__dirname + '/../../../' + config.tslint)) {
        console.info(funkyLogger.color('yellow', 'info: tslint.json not found, using default config file'));
        config.tslint = defaultConfig.tslint;
      }
      if (config.typeCheck && !fs.existsSync(__dirname + '/../../../' + config.tsconfig)) {
        console.info(funkyLogger.color('yellow', 'info: tsconfig.json not found, type checking will be disabled'));
        config.typeCheck = defaultConfig.typeCheck;
      }
      extendedConfig.tslint = config.tslint || defaultConfig.tslint;
      extendedConfig.srcFiles = config.srcFiles || defaultConfig.srcFiles;
      extendedConfig.outDir = config.outDir || defaultConfig.outDir;
      extendedConfig.json = config.json || defaultConfig.json;
      extendedConfig.fileWiseData = config.fileWiseData || defaultConfig.fileWiseData;
      extendedConfig.breakOnError = config.breakOnError;
      extendedConfig.typeCheck = config.typeCheck;
      extendedConfig.tsconfig = config.tsconfig;
      if (extendedConfig.json === extendedConfig.fileWiseData) {
        extendedConfig.json = defaultConfig.json;
        extendedConfig.fileWiseData = defaultConfig.fileWiseData;
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
    extendedConfig.fileWiseReport = path.join(extendedConfig.outDir, extendedConfig.fileWiseData);


    console.info('Config used for generation of report: ');
    console.info(funkyLogger.color('cyan', 'Path to tslint.json: '),
      funkyLogger.color('magenta', extendedConfig.tslint));
    if (extendedConfig.typeCheck) {
      console.info(funkyLogger.color('cyan', 'Path to tsconfig.json: '),
        funkyLogger.color('magenta', extendedConfig.tsconfig));
    }
    console.info(funkyLogger.color('cyan', 'Source files to be linted: '),
      funkyLogger.color('magenta', extendedConfig.srcFiles));
    console.info(funkyLogger.color('cyan', 'Output path for JSON report: '),
      funkyLogger.color('magenta', extendedConfig.finalReport));

    return extendedConfig;

  }

  module.exports = validateConfig;

}());
