import { getCountry, getPlaylist } from "../../api";
import { addBlockPlaylist } from "../Actions/appPlaylists";
import { setChosenPlaylist, setSearchQuery, chosenPlaylistLoading } from "../Actions/appValues";

export const getRequestCountry = (countryId) => (dispatch) => {
  getCountry(countryId)
    .then(json => { dispatch(setSearchQuery(json)) })
}

export const getRequestPlaylist = (browseId) => (dispatch) => {
  dispatch(chosenPlaylistLoading());
  const timerId = setTimeout(() => addBlockPlaylist(browseId), 5000);
  getPlaylist(browseId)
    .then(json => {
      dispatch(setChosenPlaylist(json));
      clearTimeout(timerId)
    })
    .catch(console.log)
}
