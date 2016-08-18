/**
 * Created by vuthasone on 8/17/2016.
 */
var path = require('path'),
    ghPages = require('gh-pages');
ghPages.publish(path.join(__dirname, 'dist'), function (err) {
    if (err) {
        console.log('publish error occurred', err);
    } else {
        console.log('publish sucessful');
    }
});