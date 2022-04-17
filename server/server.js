const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const YoutubeMusicApi = require('youtube-music-api')
const countries = require("i18n-iso-countries");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));

const api = new YoutubeMusicApi()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post('/search', (req, res) => {
  try {
    const search = req.body.search
    api.initalize()
      .then(() => {
        api.search(search, "playlist").then(data => res.json({ playlists: data.content }))
      })
  } catch (err) {
    console.log(err)
  }
})

app.post('/playlist', (req, res) => {
  try {
    const browseId = req.body.browseId
    api.initalize()
      .then(() => {
        api.getPlaylist(browseId).then(data => {
          res.json({
            tracks: data
          })
        })
      })
  } catch (err) {
    console.log(err)
  }
})

app.post('/country', (req, res) => {
  try {
    const countryId = req.body.countryId
    const country = countries.getName(countryId, "en", { select: "alias" })
    res.json({ country })
  } catch (err) {
    console.log()
  }
})

app.listen(PORT)