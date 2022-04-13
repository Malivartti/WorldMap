export const ACTIONS = {
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  SET_PLAYING_TRACK: 'SET_PLAYING_TRACK',
  SET_PLAYING_PLAYLIST: 'SET_PLAYING_PLAYLIST',
  SET_CHOSEN_PLAYLIST: 'SET_CHOSEN_PLAYLIST',
  SET_IS_TRACK_PLAYING: 'SET_IS_TRACK_PLAYING',
};

export const setSearchQuery = (payload) => ({type: ACTIONS.SET_SEARCH_QUERY, payload});
export const setPlayingTrack = (payload) => ({type: ACTIONS.SET_PLAYING_TRACK, payload});
export const setPlayingPlaylist = (payload) => ({type: ACTIONS.SET_PLAYING_PLAYLIST, payload});
export const setChosenPlaylist = (payload) => ({type: ACTIONS.SET_CHOSEN_PLAYLIST, payload});
export const setIsTrackPlaying = (payload) => ({type: ACTIONS.SET_IS_TRACK_PLAYING, payload});
