// taken from the gestalt project
// https://github.com/pinterest/gestalt/blob/master/packages/gestalt/rollup.config.js

const fs = require('fs')
const path = require('path')
const xml2js = require('xml2js')

function svgPath() {
  return {
    name: 'svgPath',
    load(id) {
      if (path.extname(id) !== '.svg') {
        return null
      }
      return new Promise((resolve, reject) =>
        xml2js.parseString(fs.readFileSync(id, 'utf-8'), (err, result) => {
          if (err) {
            return reject(err)
          }
          return resolve(`export default '${result.svg.path[0].$.d}';`)
        })
      )
    }
  }
}

module.exports = svgPath