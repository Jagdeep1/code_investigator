import fs from 'fs';

const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(zip|tar|rar|7z)$/)) {
        return cb(new Error('Only compressed files are allowed!'), false);
    }
    cb(null, true);
};

const destination = (req, file, cb) => {
    // We are responsible for creating the directory when passing destination to multer.
    if (!fs.existsSync('uploads')) {
        fs.mkdirSync('uploads');
    }
    cb(null, 'uploads');
}

const fileName = (req, file, cb) => {
    cb(null, file.originalname);
}

const destinationRename = (fieldname, filename, req, res) => {
    return path.join(fieldname, "i" + req.params.projectName);
}

export { fileFilter, destination, fileName, destinationRename }