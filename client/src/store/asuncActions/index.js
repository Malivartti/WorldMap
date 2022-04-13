import { getCountry, getPlaylist } from "../../api";
import { setPlaylist } from "../Actions";
import { setSearchValue } from './../Actions/index';

export const getRequestCountry = (countryId) => (dispatch) => {
  getCountry(countryId)
  .then(json => dispatch(setSearchValue({ value: json, isFormRequest: false})))
}

export const getRequestPlaylist = (browseId) => (dispatch) =>{
  getPlaylist(browseId)
  .then(json => dispatch(setPlaylist(json)))
}
