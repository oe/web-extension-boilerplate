const zipFolder = require('zip-folder')
const path = require('path')
const fs = require('fs')
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

/** format time duration ms, m, min, keep 2 fractional parts */
function formatDuration(duration) {
  if (duration < 1000) {
    return `${duration}ms`
  } else if (duration < 60 * 1000) {
    return `${(duration / 1000).toFixed(2)}s`
  } else {
    return `${(duration / 1000 / 60).toFixed(2)}min`
  }
}

/** format file size, b, kb, m, keep 2 fractional parts */
function formatSize(size) {
  if (size < 1024) {
    return `${size} B`
  } else if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(2)} KB`
  } else {
    return `${(size / 1024 / 1024).toFixed(2)} M`
  }
}

function printZipInfo(duration) {
  const stat = fs.statSync(EXT_PATH)
  const sizeInfo = formatSize(stat.size)
  const fileName = path.basename(EXT_PATH)
  // pad to align columns with parcel building infos
  const fileNameLog = fileName.padStart(10)
  const sizeInfoLog = sizeInfo.padStart(47 - fileNameLog.length)
  const durationLog = formatDuration(duration).padStart(9)
  console.log(`\n${fileNameLog}${sizeInfoLog}${durationLog}`)
}

async function main() {
  clearFile(EXT_PATH)
  const startTime = Date.now()
  await zipDirectory(DIST_PATH, EXT_PATH)
  const endTime = Date.now()
  printZipInfo(endTime - startTime)
}

main()
