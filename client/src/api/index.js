import axios from 'axios';

export async function getSearch(search) {
  try {
    const response = await axios.post('http://localhost:3001/search', {
      search
    })
    return response.data.playlists;
  } catch (err) {
    return err
  }
}

export async function getPlaylist(browseId) {
  try {
    const response = await axios.post('http://localhost:3001/playlist', {
      browseId
    })
    console.log(response.data.tracks)
    return response.data.tracks
  } catch (err) {
    return err
  }
}

export async function getCountry(countryId) {
  try {
    const response = await axios.post('http://localhost:3001/country', {
      countryId,
    })
    return response.data.country
  } catch (err) {
    return err
  }
}