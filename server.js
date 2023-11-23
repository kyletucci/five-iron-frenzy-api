const { experimentalStyled } = require('@mui/material')
const express = require('express')
const app = express()
const PORT = 8000
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'discography'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded( { extended: true } ))
app.use(express.json())

app.get('/',(req, res) => {
    db.collection('albums').find().toArray()
    .then(data => {
        res.render('index.ejs', { info: data })
    })
    .catch(error => console.error(error))
})

app.get('/:album',(req, res) => {
    const albumName = req.params.album.toLowerCase()
    db.collection('albums').find({albumTitle: albumName}).toArray()
    .then(data => {
        res.render('album.ejs', { info: data })
    })
})

app.get('/api/:album/tracklist',(req, res) => {
    const albumName = req.params.album.toLowerCase()
    if (discography[albumName]){
        res.json(discography[albumName].tracks)
    }
})

app.get('/api/:album/tracklist/:tracknumber',(req, res) => {
    const albumName = req.params.album.toLowerCase()
    const trackNumber = Number(req.params.tracknumber)
    if (discography[albumName]){
        res.json(discography[albumName].tracks[trackNumber - 1])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is now running on port ${PORT}`)
})