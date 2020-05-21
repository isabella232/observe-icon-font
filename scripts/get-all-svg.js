#! /usr/bin/env node

const path = require('path')
const getSvgFiles = require('../lib/get-svg-files')

getSvgFiles(require('../config'), path.join(__dirname, '..', 'svg'))
