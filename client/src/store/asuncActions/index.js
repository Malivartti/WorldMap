import { getCountry, getPlaylist } from "../../api";
import { setChosenPlaylist, setSearchQuery, chosenPlaylistLoading } from "../Actions/appValues";

export const getRequestCountry = (countryId) => (dispatch) => {
  getCountry(countryId)
    .then(json => { dispatch(setSearchQuery(json)) })
}

export const getRequestPlaylist = (browseId) => (dispatch) => {
  dispatch(chosenPlaylistLoading());
  getPlaylist(browseId)
    .then(json => {
      dispatch(setChosenPlaylist({...json, browseId}));
    })
    .catch(console.log)
}
