import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import PlaylistsList from './PlaylistsList'
import PlaylistSongs from './PlaylistSongs'
import { getCountryName, getSearchValue } from '../store/selectors';
import { getSearch } from '../api';

export default function PlaylistModal() {
  const [showPlaylists, setShowPlaylists] = useState(true);
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const country = useSelector(getCountryName);
  const search = useSelector(getSearchValue);
  const countryName = search.isFormRequest ? search.value : country;
  

  useEffect(() => {
    if (countryName) {
      setIsLoading(true)
      getSearch(countryName).then(res => {
        setIsLoading(false)
        setPlaylists(res)
      });
    }
 }, [countryName])

  return (
    <div className="playlists">
      {showPlaylists 
      ? <PlaylistsList title={countryName} playlists={playlists} setShowPlaylists={setShowPlaylists} isLoading={isLoading}/> 
      : <PlaylistSongs  setShowPlaylists={setShowPlaylists}/>}
    </div>
  )
}
