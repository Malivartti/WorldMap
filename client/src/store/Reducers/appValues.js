import { ACTIONS } from './../Actions/appValues';

const defaultState = {
  searchQuery: '',
  playingTrack: {},
  playingPlaylist: {},
  chosenPlaylist: { status: 'idle', playlist: {}},
  isTrackPlaying: false,
};

export const appValues = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case ACTIONS.SET_PLAYING_TRACK:
      return { ...state, playingTrack: action.payload };
    case ACTIONS.SET_PLAYING_PLAYLIST:
      return { ...state, playingPlaylist: action.payload };
    case ACTIONS.CHOSEN_PLAYLIST_LOADING: 
      return {...state, chosenPlaylist: {...state.chosenPlaylist, status: 'loading'}}
    case ACTIONS.SET_CHOSEN_PLAYLIST:
      return { ...state, chosenPlaylist: { status: 'idle', playlist: action.payload} };
    case ACTIONS.SET_IS_TRACK_PLAYING:
      return { ...state, isTrackPlaying: action.payload };
    default:
      return state;
  };
};
