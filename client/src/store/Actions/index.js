export const ACTIONS = {
  SET_COUNTRY: 'SET_COUNTRY',
  SET_TRACK: 'SET_TRACK',
  SET_PLAYLIST: 'SET_PLAYLIST',
  ADD_FAVORITE_TRACK: 'ADD_FAVORITE_TRACK',
  ADD_FAVORITE_PLAYLIST: 'ADD_FAVORITE_PLAYLIST',
  REMOVE_FAVORITE_TRACK: 'REMOVE_FAVORITE_TRACK',
  REMOVE_FAVORITE_PLAYLIST: 'REMOVE_FAVORITE_PLAYLIST',
}

export const setTrack = (payload) => ({type: ACTIONS.SET_TRACK, payload})
export const setCounrty = (payload) => ({type: ACTIONS.SET_COUNTRY, payload})
export const setPlaylist = (payload) => ({type: ACTIONS.SET_PLAYLIST, payload})
export const addFavoriteTrack = (payload) => ({type: ACTIONS.ADD_FAVORITE_TRACK, payload})
export const addFavoritePlaylist = (payload) => ({type: ACTIONS.ADD_FAVORITE_PLAYLIST, payload})
export const removeFavoriteTrack = (payload) => ({type: ACTIONS.REMOVE_FAVORITE_TRACK, payload})
export const removeFavoriteplaylist = (payload) => ({type: ACTIONS.REMOVE_FAVORITE_PLAYLIST, payload})
