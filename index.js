// taken from the gestalt project
// https://github.com/pinterest/gestalt/blob/master/packages/gestalt/rollup.config.js

var fs = require('fs')
var path = require('path')
var xml2js = require('xml2js')

module.exports = function svgPath() {
  return {
    name: 'svgPath',
    load(id) {
      if (path.extname(id) !== '.svg') {
        return null;
      }
      const data = fs.readFileSync(id, 'utf-8');
      return new Promise((resolve, reject) =>
        xml2js.parseString(data, (err, result) => {
          if (err) {
            return reject(err);
          }
          const path = result.svg.path[0].$.d;
          const code = `export default '${path}';`;
          return resolve({ code });
        })
      )
    }
  }
}