import fs from 'fs';
import fstream from 'fstream';
import unzip from 'unzip';

const log = console.log;

const archiveLocation = 'uploads/';
const destination = 'extracted/';

let decompress = (folderName) => {
    let readStream = fs.createReadStream(`${archiveLocation}${folderName}.zip`);
    let folderToExtractIn = `${destination}${folderName}/`;
    // This creates the directory if it's not already present!
    if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination);
    }
    if (!fs.existsSync(folderToExtractIn)) {
        fs.mkdirSync(folderToExtractIn);
    }
    let writeStream = fstream.Writer(folderToExtractIn);
    return new Promise((resolve, reject) => {
        readStream
            .pipe(unzip.Parse())
            .pipe(writeStream)
            .on('error', (err) => {
                reject(`Error extracting the archive: ${err}`);
            })
            .on('close', () => {
                resolve('Extraction Completed!\n');
            });
    });
}

module.exports = {
    decompress
}