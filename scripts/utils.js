const fs = require('fs')

exports.clearFile = function clearFile(filePath) {
  if (!fs.existsSync(filePath)) return
  fs.unlinkSync(filePath)
}

exports.clearFolder = function clearFolder(folderPath) {
  if (!fs.existsSync(folderPath)) return
  fs.rmdirSync(folderPath, { recursive: true })
}