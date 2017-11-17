import { CODE_UPLOAD } from '../constants/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case CODE_UPLOAD:
            const { promise } = action;
            return promise;
        default:
            return state;
    }
};