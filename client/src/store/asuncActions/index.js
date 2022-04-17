import { getCountry, getPlaylist } from "../../api";
import { setChosenPlaylist, setSearchQuery, chosenPlaylIstLoading } from "../Actions/appValues";

export const getRequestCountry = (countryId) => (dispatch) => {
  getCountry(countryId)
    .then(json => { dispatch(setSearchQuery(json)) })
}

export const getRequestPlaylist = (browseId) => (dispatch) => {
  dispatch(chosenPlaylIstLoading(browseId));
  getPlaylist(browseId)
    .then(json => {
      dispatch(setChosenPlaylist(json));
    })
    .catch(console.log)
}
