const fs = require('fs');
const matter = require('gray-matter');

const postsDirPath = '_posts';
let postFilePaths = [];

const postDirs = fs.readdirSync(postsDirPath);
postDirs.forEach((dir) => {
    const files = fs.readdirSync([postsDirPath, dir].join('/'));
    postFilePaths = postFilePaths.concat(files.map((fileName) => [postsDirPath, dir, fileName].join('/')));
});

const allPostsData = postFilePaths.map((filePath) => {
    const postJson = matter.read(filePath);
    postJson.data.filePath = filePath;
    return JSON.stringify(postJson.data);
});

fs.writeFileSync('scripts/tmp/allPostsData.json', allPostsData.join('\n'));
