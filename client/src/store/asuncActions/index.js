import { getCountry, getPlaylist } from "../../api";
import { setPlayingPlaylist, setSearchQuery } from "../Actions/appValues";

export const getRequestCountry = (countryId) => (dispatch) => {
  getCountry(countryId)
  .then(json => dispatch(setSearchQuery(json)))
}

export const getRequestPlaylist = (browseId) => (dispatch) =>{
  getPlaylist(browseId)
  .then(json => dispatch(setPlayingPlaylist(json)))
}
