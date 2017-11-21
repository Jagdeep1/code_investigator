import { GET_TSLINT_SUMMARY, GET_TSLINT_SUMMARY_SUCCESS, GET_TSLINT_SUMMARY_FAILURE } from '../constants/actionTypes';
const initialState = {
    fetchingData: false,
    fetchDataFailed: false,
    data: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TSLINT_SUMMARY:
            return {
                ...state,
                fetchingData: true
            };
        case GET_TSLINT_SUMMARY_SUCCESS:
            return {
                ...state,
                data: action.res.data
            }
        case GET_TSLINT_SUMMARY_FAILURE:
            return {
                ...state,
                fetchDataFailed: true
            }
        default:
            return state;
    }
};