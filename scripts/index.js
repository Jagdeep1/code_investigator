
(function () {

  const tsLintSummaryReport = require('./src/tslint-report');
  
  const tslintConfig = {
    srcFiles: 'extracted/src/**/*.ts',
    typeCheck: true,
    tsconfig: 'extracted/tsconfig.json'
  };

  function analyzeCode() {
    tsLintSummaryReport(tslintConfig);
  }

  module.exports = analyzeCode;

}());
