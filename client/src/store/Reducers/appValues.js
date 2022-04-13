import { ACTIONS } from './../Actions/appValues';


const defaultState = {
  searchQuery: '',
  playingTrack: {},
  playingPlaylist: {},
  chosenPlaylist: {},
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
    case ACTIONS.SET_CHOSEN_PLAYLIST:
      return { ...state, chosenPlaylist: action.payload };
    case ACTIONS.SET_IS_TRACK_PLAYING:
      return { ...state, isTrackPlaying: action.payload };
    default:
      return state;
  };
};
