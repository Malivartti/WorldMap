import { ACTIONS } from "../Actions/appPlaylists";

const stateFromStorage = JSON.parse(localStorage.getItem('playlists'))
const defaultState = stateFromStorage ?? {
  favoriteTracks: [],
  favoritePlaylists: [],
  blocked: [],
};


export const appPlaylists = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_FAVORITE_TRACK:
      return { ...state, favoriteTracks: [...state.favoriteTracks, action.payload] };
    case ACTIONS.ADD_FAVORITE_PLAYLIST:
      return { ...state, favoritePlaylists: [...state.favoritePlaylists, action.payload] };
    case ACTIONS.ADD_BLOCK_PLAYLIST:
      return { ...state, blocked: [...state.blocked, action.payload] }
    case ACTIONS.REMOVE_FAVORITE_TRACK:
      return { ...state, favoriteTracks: state.favoriteTracks.filter(track => track.videoId !== action.payload) };
    case ACTIONS.REMOVE_FAVORITE_PLAYLIST:
      return { ...state, favoritePlaylists: state.favoritePlaylists.filter(playlist => playlist.browseId !== action.payload) };
    default:
      return state;
  };
};
