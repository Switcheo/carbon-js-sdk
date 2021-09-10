const fs = require('fs')
const exec = require('child_process').exec
const async = require('async')

const scriptsFolder = './examples/'

const files = fs.readdirSync(scriptsFolder)
const funcs = files.map(function (file) {
  return exec.bind(null, `ts-node ${scriptsFolder}${file}`)
})

function getResults(err, data) {
  if (err) {
    return console.log(err)
  }
  const results = data.map((lines) => {
    return lines.join('')
  })
  console.log(results)
}

// async.parallel(funcs, getResults)
async.series(funcs, getResults)