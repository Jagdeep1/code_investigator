
(function () {

  const tsLintSummaryReport = require('./src/tslint-report');

  function analyzeCode(destinationFolder) {
    const tslintConfig = {
      srcFiles: `extracted/${destinationFolder}/src/**/*.ts`,
      typeCheck: true,
      tsconfig: `extracted/${destinationFolder}/tsconfig.json`
    };
    // TODO: Plan is to have a bunch of tasks running in parallel with something like Promise.all here.
    return tsLintSummaryReport(tslintConfig);
  }

  module.exports = analyzeCode;

}());
