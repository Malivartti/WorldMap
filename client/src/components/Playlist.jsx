import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import PlaylistsList from './PlaylistsList'
import PlaylistSongs from './PlaylistSongs'
import { getCountryName, getSearchValue } from '../store/selectors';
import { getSearch } from '../api';

export default function PlaylistModal() {
  const [showPlaylists, setShowPlaylists] = useState(true);
  const [playlists, setPlaylists] = useState([]);

  const country = useSelector(getCountryName);
  const search = useSelector(getSearchValue);

  const countryName = search.isFormRequest ? search.value : country.en;

  useEffect(() => {
    function getSearchResult() {
     getSearch(countryName).then(res => setPlaylists(res));
   }
   getSearchResult();
 }, [country, search])

  return (
    <div className="playlists">
      {showPlaylists 
      ? <PlaylistsList title={countryName} playlists={playlists} setShowPlaylists={setShowPlaylists}/> 
      : <PlaylistSongs playlistName="Вечерний плейлист" setShowPlaylists={setShowPlaylists}/>}
    </div>
  )
}

