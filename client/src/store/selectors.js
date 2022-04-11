export const getCountryName = (state) => (state.country); 
export const getSearchValue = (state) => (state.search);
export const getPlaylistData = (state) => state.playlist;
export const getFavoritePlaylists = (state) => (state.favoritePlaylists);
export const getCurrentFavoritePlaylist = (state) => (state.currentFavoritePlaylist);
export const getFavoriteTracks = (state) => (state.favoriteTracks);
export const getTrack = (state) => (state.track);
export const getPlaylistContent = (state) => (state.playlist.content);
export const getIsPlaying = (state) => (state.isPlaying)
export const getBlockedPlaylist = (state) => (state.blockedPlaylists)