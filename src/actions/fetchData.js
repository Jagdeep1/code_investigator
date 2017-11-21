import { GET_TSLINT_SUMMARY, GET_TSLINT_SUMMARY_SUCCESS, GET_TSLINT_SUMMARY_FAILURE} from '../constants/actionTypes';
import  api  from '../api';

export function getTsLintSummary(projectName){
    return {
        types: [GET_TSLINT_SUMMARY, GET_TSLINT_SUMMARY_SUCCESS, GET_TSLINT_SUMMARY_FAILURE],
        promise: api.getTsLintSummary(projectName)
    };
}