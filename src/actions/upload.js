import { CODE_UPLOAD } from '../constants/actionTypes';
import  api  from '../api';

export function upload(files){
    return {
        types: [CODE_UPLOAD],
        promise: api.upload(files)
    };
}