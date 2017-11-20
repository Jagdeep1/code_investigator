(function () {
  
  function TsLintSummarySchema(totalFiles) {
    this.totalFiles = totalFiles;
    this.total = 0;
    this.totalErrors = 0;
    this.totalWarnings = 0;
    this.errorTypes = [];
    this.warningTypes = [];
    this.complexityThreshold = 0;
    this.aboveComplexitThreshold = 0;
    this.totalComplexity = 0;
    this.totalFunctionCount = 0;
    this.files = [];
  }

  module.exports = TsLintSummarySchema;

}());