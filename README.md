# rollup-plugin-svg-path
A rollup plugin for converting SVG files to path

> taken from the [gestalt](https://github.com/pinterest/gestalt/blob/master/packages/gestalt/rollup.config.js) project

### Installation
```bash
npm install rollup-plugin-svg-path --save-dev
```

### Usage
```javascript
// rollup.config.js
import svgPath from 'rollup-plugin-svg-path'

export default {
  plugins:[
    svgPath()
  ]
}
```