/**
 * Created by vuthasone on 8/17/2016.
 */
var path = require('path'),
    fs = require('fs'),
    ghPages = require('gh-pages'),
    distFolder = 'dist';
//We need to move the 404 page in too the dist folder too
copyFilesToDist(['404.html', 'CNAME', 'README.md']);

//Publish dist folder to gh-pages branch
ghPages.publish(path.join(__dirname, distFolder), function (err) {
    if (err) {
        console.log('publish error occurred', err);
    } else {
        console.log('publish sucessful');
    }
});

function copyFilesToDist(files) {
    files.forEach(function (f) {
        console.log('coping file', f, ' over to dist');
        var contents = fs.readFileSync(f).toString();
        fs.writeFileSync(distFolder + '/' + f, contents);
    });
}