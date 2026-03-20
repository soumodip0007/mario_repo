const express = require('express') // common js
// import express from express // ES
require('dotenv').config()
const app = express()
const port = 4000

// app.get('/', () => {}) // callbacks

const data = {
    name: "Mario",
    age: 50,
    location: "Kolkata",
    marks: 95
}

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

app.get('/data', (req, res) => {
    res.json(data)
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
