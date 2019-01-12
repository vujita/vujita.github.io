/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');
const ghPages = require('gh-pages');


const distFolder = 'dist';
const copyFilesToDist = (files) => {
  files.forEach((f) => {
    console.log('coping file', f, ' over to dist');
    const contents = fs.readFileSync(f).toString();
    fs.writeFileSync(`${distFolder}/${f}`, contents);
  });
};
// We need to move the 404 page in too the dist folder too
copyFilesToDist([
  '404.html',
  'CNAME',
  'README.md',
]);

// Publish dist folder to gh-pages branch
ghPages.publish(path.join(__dirname, distFolder), (err) => {
  if (err) {
    console.log('publish error occurred', err);
  } else {
    console.log('publish sucessful');
  }
});
