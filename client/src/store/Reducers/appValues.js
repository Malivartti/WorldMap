import { ACTIONS } from './../Actions/appValues';

const stateFromStorage = JSON.parse(localStorage.getItem('values'))
const defaultState = stateFromStorage ?? {
  searchQuery: '',
  playingTrack: {},
  playingPlaylist: {},
  chosenPlaylist: { isLoading: true, playlist: {} },
  isTrackPlaying: false,
  trackVolume: 50,
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
      return { ...state, chosenPlaylist: { browseId: action.payload, isLoading: true  } }
    case ACTIONS.SET_CHOSEN_PLAYLIST:
      return { ...state, chosenPlaylist: { ...state.chosenPlaylist, isLoading: false, playlist: action.payload } };
    case ACTIONS.SET_IS_TRACK_PLAYING:
      return { ...state, isTrackPlaying: action.payload };
    case ACTIONS.SET_CURRENT_TRACK_TIME:
      return { ...state, playingTrack: { ...state.playingTrack, currentTime: action.payload } };
    case ACTIONS.SET_TRACK_VOLUME:
      return { ...state, trackVolume: action.payload };
    default:
      return state;
  };
};
