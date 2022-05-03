// Simple local JSON database

const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('data.json')
module.exports = lowdb(adapter)
