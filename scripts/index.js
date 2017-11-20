
(function () {

  const tsLintSummaryReport = require('./src/tslint-report');
  
  const tslintConfig = {
    srcFiles: 'extracted/src/**/*.ts',
    typeCheck: true,
    tsconfig: 'extracted/tsconfig.json'
  };

  function analyzeCode() {
    // TODO: Plan is to have a bunch of tasks running in parallel with something like Promise.all here.
    return tsLintSummaryReport(tslintConfig);
  }

  module.exports = analyzeCode;

}());
