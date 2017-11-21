import multer from 'multer';

import { fileFilter, destination, fileName, destinationRename } from './utils';

const storage = multer.diskStorage({
    destination: destination,
    filename: fileName
});
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
}).single('src');

let uploadFile = (req, res) => {
    return new Promise((resolve, reject) => {
        upload(req, res, err => {
            err ? reject(`Something went wrong! Error: ${err}`) : resolve('File uploaded sucessfully!');
        });
    });
}

module.exports = {
    uploadFile,
    upload
};