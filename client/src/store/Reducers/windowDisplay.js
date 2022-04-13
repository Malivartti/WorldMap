import { ACTIONS } from './../Actions/windowDisplay';


const defaultState = {
  openPlaylistModal: false,
  showPlaylists: true,
};

export const windowDisplay = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_PLAYLIST_MODAL:
      return { ...state, openPlaylistModal: action.payload };
    case ACTIONS.CLOSE_PLAYLIST_MODAL:
      return { ...state, openPlaylistModal: action.payload };
    case ACTIONS.SHOW_PLAYLISTS:
      return { ...state, showPlaylists: action.payload };
    case ACTIONS.SHOW_TRACKS:
      return { ...state, showPlaylists: action.payload };
    default:
      return state;
  };
};
