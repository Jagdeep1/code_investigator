const fileFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(zip|tar|rar|7z)$/)) {
        return cb(new Error('Only compressed files are allowed!'), false);
    }
    cb(null, true);
};

const destination = function(req, file, cb) {
    cb(null, "uploads");
}

const fileName = function(req, file, callback) {
    callback(null, Date.now() + "_" + file.originalname);
}

export { fileFilter, destination, fileName }