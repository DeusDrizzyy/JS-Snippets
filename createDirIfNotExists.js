/* Node.js */
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);

/* Usage Examples: */
createDirIfNotExists('test'); // Creates the directory 'test', if it doesn't exist.
