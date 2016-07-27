/**
 * Created by vnguyen on 7/27/16.
 */
var fs = require('fs'),
    del = require('del'),
    path = require('path');

if (fs.existsSync('manifest.json')) {
    console.log('Grabbing manifest and deleting old distribution files');
    fs.readFile('./manifest.json', 'utf8', function (err, data) {
        if (err) {
            throw err;
        } else {
            var fileMap = JSON.parse(data),
                filesToDelete = ['manifest.json', 'index.html', 'stats.html'];
            for (var k in fileMap) {
                filesToDelete.push(fileMap[k]);
            }
            console.log(filesToDelete)
            del.sync(filesToDelete);
        }
    });

} else {
    console.log('No manifest file found, so we should be good');
}