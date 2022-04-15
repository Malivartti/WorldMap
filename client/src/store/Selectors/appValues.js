export const getSearchQuery = (state) => (state.appValues.searchQuery);
export const getPlayingTrack = (state) => (state.appValues.playingTrack);
export const getPlayingPlaylist = (state) => (state.appValues.playingPlaylist);
export const getChosenPlaylist =  (state) => (state.appValues.chosenPlaylist.playlist);
export const getLoadingStatus = (state) => (state.appValues.chosenPlaylist.status)
export const getIsTrackPlaying = (state) => (state.appValues.isTrackPlaying);
export const getCurrentTrackTime = (state) => (state.appValues.playingTrack.currentTime);
