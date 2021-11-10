const zipFolder = require('zip-folder')
const path = require('path')
const { clearFile } = require('./utils')

const EXT_PATH = path.join(__dirname, '../ext.zip')
const DIST_PATH = path.join(__dirname, '../dist')



function zipDirectory(src, dest) {
  return new Promise((resolve, reject) => {
    zipFolder(src, dest, function (err) {
      if (err) return reject(err)
      resolve(true)
    });
  })
}

async function main() {
  clearFile(EXT_PATH)
  await zipDirectory(DIST_PATH, EXT_PATH)
}

main()
