import { CODE_UPLOAD } from '../constants/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case CODE_UPLOAD:
            const { files } = action;
            return state;
        default:
            return state;
    }
};