const tilebelt = require('@mapbox/tilebelt')
const fs = require('fs')

const list = require('./nfm.json').nfm
let geojson = {
  type: 'FeatureCollection', features: []
}

for (let zxy of list) {
  geojson.features.push({
    type: 'Feature',
    geometry: tilebelt.tileToGeoJSON([zxy[1], zxy[2], zxy[0]]),
    properties: { zxy: zxy.join('-') }
  })
}

console.log(JSON.stringify(geojson, null, 2))
