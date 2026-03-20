const express = require('express') // common js
// import express from express // ES
require('dotenv').config()
const app = express()
const port = 4000

// app.get('/', () => {}) // callbacks

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('soumodipdas')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login at Mario website</h1>')
})

app.get('/mario', (req, res) => {
  res.send('<h2>Welcome to Mario Website</h2>')
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
})
