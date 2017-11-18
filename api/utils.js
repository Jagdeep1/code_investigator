const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(zip|tar|rar|7z)$/)) {
        return cb(new Error('Only compressed files are allowed!'), false);
    }
    cb(null, true);
};

const destination = (req, file, cb) => {
    cb(null, 'uploads');
}

const fileName = (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname);
}

export { fileFilter, destination, fileName }