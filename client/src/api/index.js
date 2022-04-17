import axios from 'axios';

const URL = "https://git.heroku.com/world-map-react.git";

export async function getSearch(search) {
  try {
    const response = await axios.post(`${URL}/search`, {
      search
    })
    return response.data.playlists;
  } catch (err) {
    throw new Error(err)
  }
}

export async function getPlaylist(browseId) {
  try {
    const response = await axios.post(`${URL}/playlist`, {
      browseId
    })
    return response.data.tracks
  } catch (err) {
    throw new Error(err)
  }
}

export async function getCountry(countryId) {
  try {
    const response = await axios.post(`${URL}/country`, {
      countryId,
    })
    return response.data.country
  } catch (err) {
    throw new Error(err)
  }
}