const express = require('express')
const path = require('path')
const fs = require('fs')
const os = require('os')

const app = express()
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, './about.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(7499, () => {
  console.log('server listening on port 7499...')
})
