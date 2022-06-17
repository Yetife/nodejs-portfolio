const path = require('path')

let directory = path.join(__dirname, 'path.js')

let fileExtension = path.extname(directory)

console.log(fileExtension)