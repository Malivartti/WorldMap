import { ACTIONS } from './../Actions/index';


const defaultState = {
  search: { value: '', isFormRequest: false },
  country: '',
  track: {},
  playlist: [],
  favoriteTracks: [],
  favoritePlaylists: [],
  currentFavoritePlaylist: null,
  isPlaying: false,
}

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_VALUE:
      return { ...state, search: { value: action.payload.value, isFormRequest: action.payload.isFormRequest } }
    case ACTIONS.SET_COUNTRY:
      return { ...state, country: action.payload }
    case ACTIONS.SET_TRACK:
      return { ...state, track: action.payload }
    case ACTIONS.SET_PLAYLIST:
      return { ...state, playlist: action.payload }
    case ACTIONS.SET_CURRENT_FAVOTITE_PLAYLIST:
      return { ...state, currentFavoritePlaylist: action.payload }
    case ACTIONS.SET_IS_PLAYING:
      return { ...state, isPlaying: action.payload }
    case ACTIONS.ADD_FAVORITE_TRACK:
      return { ...state, favoriteTracks: [...state.favoriteTracks, action.payload] }
    case ACTIONS.ADD_FAVORITE_PLAYLIST:
      return { ...state, favoritePlaylists: [...state.favoritePlaylists, action.payload] }
    case ACTIONS.REMOVE_FAVORITE_TRACK:
      return { ...state, favoriteTracks: state.favoriteTracks.filter(track => track.videoId !== action.payload) }
    case ACTIONS.REMOVE_FAVORITE_PLAYLIST:
      return { ...state, favoritePlaylists: state.favoritePlaylists.filter(playlistId => playlistId.browseId !== action.payload) }
    default:
      return state
  }
}
