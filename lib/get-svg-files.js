const fs = require('fs')
const path = require('path')
const readFiles = require('folder-reader')
const through = require('through2').obj
const pump = require('pump')

const defaultConfig = require('../config')

module.exports = function getSvgFiles (config = defaultConfig, destinationPath) {
  return Promise.all([
    getMakiFiles(config.maki, destinationPath),
    getTemakiFiles(config.temaki, destinationPath),
    getFontAwesomeFiles(config.fontAwesome, destinationPath)
  ])
}

function getMakiFiles (options, destinationPath) {
  if (!options) return

  const packagePath = getPackagePath('@mapbox/maki')
  const iconsPath = path.join(packagePath, 'icons')

  function eachFile (file, enc, next) {
    if (file.relname.includes('-11.svg')) {
      return next()
    }

    file.filename = file.relname.replace('-15', '').replace('-', '_')

    if (!includeIcon(file.filename, options)) {
      return next()
    }

    this.push(file)
    next()
  }

  return new Promise((resolve, reject) => {
    pump(
      readFiles(iconsPath),
      through(eachFile),
      writeFiles('maki', destinationPath),
      function (err) {
        if (err) return reject(err)
        resolve()
      }
    )
  })
}

function getTemakiFiles (options, destinationPath) {
  if (!options) return

  const packagePath = getPackagePath('temaki')
  const iconsPath = path.join(packagePath, 'icons')

  function eachFile (file, enc, next) {
    if (!includeIcon(file.relname, options)) {
      return next()
    }

    file.filename = file.relname.replace('-', '_')
    this.push(file)
    next()
  }

  return new Promise((resolve, reject) => {
    pump(
      readFiles(iconsPath),
      through(eachFile),
      writeFiles('temaki', destinationPath),
      function (err) {
        if (err) return reject(err)
        resolve()
      }
    )
  })
}

function getFontAwesomeFiles (options, destinationPath) {
  if (!options) return

  const packagePath = getPackagePath('@fortawesome/fontawesome-free')
  const iconsPath = path.join(packagePath, 'svgs', 'solid')

  function eachFile (file, enc, next) {
    if (!includeIcon(file.relname, options)) {
      return next()
    }

    file.filename = file.relname.replace('-15', '').replace('-', '_')
    this.push(file)
    next()
  }

  return new Promise((resolve, reject) => {
    pump(
      readFiles(iconsPath),
      through(eachFile),
      writeFiles('fas', destinationPath),
      function (err) {
        if (err) return reject(err)
        resolve()
      }
    )
  })
}

function includeIcon (filename, options) {
  if (options === true) return true
  return typeof options === 'object' &&
    options.include && Array.isArray(options.include) &&
    options.include.includes(filename.replace('.svg', ''))
}

function getPackagePath (packageName) {
  return path.join(__dirname, '..', 'node_modules', packageName)
}

function writeFiles (sourceName, destinationPath) {
  function eachFile (file, enc, next) {
    const fileName = `${sourceName}_${file.filename}`
    const filePath = path.join(destinationPath, fileName)
    fs.writeFile(filePath, file.file, next)
  }

  return through(eachFile)
}
