import { CODE_UPLOAD } from '../constants/actionTypes';
import  api  from '../api';

export function upload(files){
    return {
        type: CODE_UPLOAD,
        promise: api.upload(files)
    };
}