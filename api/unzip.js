import fs from 'fs';
import fstream from 'fstream';
import unzip from 'unzip';

const log = console.log;

const archive = 'uploads/1511119987931_JPUI.zip';
const dest = 'extracted';

export function decompress() {
    var readStream = fs.createReadStream(archive);
    var writeStream = fstream.Writer(dest);

    return new Promise((resolve, reject) => {

        readStream
        .pipe(unzip.Parse())
        .pipe(writeStream)
        .on('close', function(something) {
          console.log('Extraction Complete: ', something);
          resolve('Extraction Completed!' + something);
        });
    });

    // fs.createReadStream(archive)
    //     .pipe(unzip.Parse())
    //     .on('entry', function (entry) {
    //         entry.pipe(fs.createWriteStream(dest));
    //         /* var fileName = entry.path;
    //         var type = entry.type; // 'Directory' or 'File'
    //         var size = entry.size;
    //         if (fileName === "this IS the file I'm looking for") {
    //             entry.pipe(fs.createWriteStream(dest));
    //         } else {
    //             entry.autodrain();
    //         } */
    //     })
    //     .on('close', function(something) {
    //         console.log('Extraction Complete: ', something);
    //     });
}