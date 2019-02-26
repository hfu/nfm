throw new Error('nfm.json is updated by node-count now.')

const fs = require('fs')

const pbfDir = '../produce-320/pbf'
const emptySize = 73

let list = JSON.parse(fs.readFileSync('nfm.json'))
  .nfm.map(v => v.join('-'))
console.error(`we have ${list.length} nfms before update.`)

for (let pbfPath of fs.readdirSync(pbfDir)) {
  if (pbfPath.match(/6-(\d*)-(\d*).osm.pbf/)) {
    const size = fs.statSync(`${pbfDir}/${pbfPath}`).size
    console.error(`${pbfPath}: ${size}`)
    if (size === emptySize) {
      const key = pbfPath.split('.')[0]
      if (!list.includes(key)) list.push(key)
    }
  }
}

let target = { 
  nfm: list.map(v => v.split('-').map(v => parseInt(v)))
    .sort((a, b) => { return (a[1] * 100 + a[2]) - (b[1] * 100 + b[2]) })
}

console.error(`we have ${list.length} nfms after update.`)

console.log(JSON.stringify(target, null, 2))
