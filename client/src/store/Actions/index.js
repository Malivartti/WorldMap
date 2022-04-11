export const ACTIONS = {
  SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',
  SET_COUNTRY: 'SET_COUNTRY',
  SET_TRACK: 'SET_TRACK',
  SET_PLAYLIST: 'SET_PLAYLIST',
  SET_CURRENT_FAVOTITE_PLAYLIST: 'SET_CURRENT_FAVOTITE_PLAYLIST',
  SET_IS_PLAYING: 'SET_IS_PLAYING',
  ADD_FAVORITE_TRACK: 'ADD_FAVORITE_TRACK',
  ADD_FAVORITE_PLAYLIST: 'ADD_FAVORITE_PLAYLIST',
  REMOVE_FAVORITE_TRACK: 'REMOVE_FAVORITE_TRACK',
  REMOVE_FAVORITE_PLAYLIST: 'REMOVE_FAVORITE_PLAYLIST',
  BLOCK_PLAYLIST: 'BLOCK_PLAYLIST'
}

export const setSearchValue = (payload) => ({type: ACTIONS.SET_SEARCH_VALUE, payload});
export const setTrack = (payload) => ({type: ACTIONS.SET_TRACK, payload})
export const setCounrty = (payload) => ({type: ACTIONS.SET_COUNTRY, payload})
export const setPlaylist = (payload) => ({type: ACTIONS.SET_PLAYLIST, payload})
export const setCurrentFavoritePlaylist = (payload) => ({type: ACTIONS.SET_CURRENT_FAVOTITE_PLAYLIST, payload})
export const addFavoriteTrack = (payload) => ({type: ACTIONS.ADD_FAVORITE_TRACK, payload})
export const addFavoritePlaylist = (payload) => ({type: ACTIONS.ADD_FAVORITE_PLAYLIST, payload})
export const removeFavoriteTrack = (payload) => ({type: ACTIONS.REMOVE_FAVORITE_TRACK, payload})
export const removeFavoritePlaylist = (payload) => ({type: ACTIONS.REMOVE_FAVORITE_PLAYLIST, payload})
export const setIsPlaying = (payload) => ({type: ACTIONS.SET_IS_PLAYING, payload})
export const blockPlaylist = (payload) => ({type: ACTIONS.BLOCK_PLAYLIST, payload})
