export const ACTIONS = {
  OPEN_PLAYLIST_MODAL: 'OPEN_PLAYLIST_MODAL',
  CLOSE_PLAYLIST_MODAL: 'CLOSE_PLAYLIST_MODAL',
  SHOW_PLAYLISTS: 'SHOW_PLAYLISTS',
  SHOW_TRACKS: 'SHOW_TRACKS',
};

export const openPlaylistModal = () => ({type: ACTIONS.OPEN_PLAYLIST_MODAL, payload: true});
export const closePlaylistModal = () => ({type: ACTIONS.CLOSE_PLAYLIST_MODAL, payload: false});
export const showPlaylist = () => ({type: ACTIONS.SHOW_PLAYLISTS, payload: true});
export const showTracks = () => ({type: ACTIONS.SHOW_TRACKS, payload: false});
