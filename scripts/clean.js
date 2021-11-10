const path = require('path')
const { clearFolder } = require('./utils')

const DIST_PATH = path.join(__dirname, '../dist')

function main() {
  clearFolder(DIST_PATH)
}

main()
