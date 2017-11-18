
(function () {

  const _ = require('lodash');

  function getRuleCount(ruleDetails) {
    let ruleTypeCovered = [];
    let ruleDataArray = [];
    let ruleDataObject = {};

    ruleDetails.forEach((value) => {
      if (ruleTypeCovered.includes(value.ruleName)) {
        ruleDataObject[value.ruleName]++;
      } else {
        ruleTypeCovered.push(value.ruleName);
        ruleDataObject[value.ruleName] = 1;
      }
    });

    for (let key in ruleDataObject) {
      ruleDataArray.push({
        ruleName: key,
        count: ruleDataObject[key]
      });
    }
  
    return ruleDataArray;

  }

  function populateSummary(tslintSummary, tsLintDetails) {
    
    const errors = _.filter(tsLintDetails, { ruleSeverity: 'ERROR' });
    const warnings = _.filter(tsLintDetails, { ruleSeverity: 'WARNING' });

    tslintSummary.total = tsLintDetails.length;
    tslintSummary.totalErrors = errors.length;
    tslintSummary.totalWarnings = warnings.length;
    tslintSummary.errorTypes = getRuleCount(errors);
    tslintSummary.warningTypes = getRuleCount(warnings);

  }

  module.exports = populateSummary;

}());
