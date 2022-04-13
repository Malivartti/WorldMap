export const ACTIONS = {
  ADD_FAVORITE_TRACK: 'ADD_FAVORITE_TRACK',
  ADD_FAVORITE_PLAYLIST: 'ADD_FAVORITE_PLAYLIST',
  REMOVE_FAVORITE_TRACK: 'REMOVE_FAVORITE_TRACK',
  REMOVE_FAVORITE_PLAYLIST: 'REMOVE_FAVORITE_PLAYLIST',
  ADD_BLOCK_PLAYLIST: 'ADD_BLOCK_PLAYLIST',
};

export const addFavoriteTrack = (payload) => ({type: ACTIONS.ADD_FAVORITE_TRACK, payload});
export const addFavoritePlaylist = (payload) => ({type: ACTIONS.ADD_FAVORITE_PLAYLIST, payload});
export const removeFavoriteTrack = (payload) => ({type: ACTIONS.REMOVE_FAVORITE_TRACK, payload});
export const removeFavoritePlaylist = (payload) => ({type: ACTIONS.REMOVE_FAVORITE_PLAYLIST, payload});
export const addBlockPlaylist = (payload) => ({type: ACTIONS.ADD_BLOCK_PLAYLIST, payload});
