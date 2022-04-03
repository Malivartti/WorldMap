import { getCountry, getPlaylist } from "../../api";
import { setPlaylist } from "../Actions";
import { setCounrty } from './../Actions/index';

export const getRequestCountry = (countryId) => (dispatch) => {
  getCountry(countryId)
  .then(json => dispatch(setCounrty(json)))
}

export const getRequestPlaylist = (browseId) => (dispatch) =>{
  getPlaylist(browseId)
  .then(json => dispatch(setPlaylist(json)))
}
