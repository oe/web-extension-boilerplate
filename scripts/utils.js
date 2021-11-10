const fs = require('fs')

exports.clearFile = function clearFile(filePath) {
  if (!fs.existsSync(filePath)) return
  fs.unlinkSync(filePath)
}

exports.clearFolder = function clearFolder(folderPath) {
  if (!fs.existsSync(folderPath)) return
  if (!fs.rmdirSync) {
    console.warn('installed nodejs is outdated, visit https://nodejs.org/ to update')
    process.exit(1)
  }
  fs.rmdirSync(folderPath, { recursive: true })
}