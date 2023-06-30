const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./contents/first.txt', 'utf8')
const second = writeFileSync('./contents/second.txt', 'utf8')

writeFileSync('./contents/result.txt', 'hello : ${first}, ${second}')
