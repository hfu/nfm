const fs = require('fs')

const nfm = (z, x, y) => {
  const _list = JSON.parse(fs.readFileSync('nfm.json'))
    .nfm.map(v => v.toString())
  return _list.includes([z, x, y].toString())
}

module.exports = nfm
