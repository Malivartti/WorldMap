import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Playlists from './Playlists'
import PlaylistTracks from './PlaylistTracks'
import { getCountryName, getSearchValue } from '../store/selectors';
import { getSearch } from '../api';

export default function PlaylistModal() {
  const [showPlaylists, setShowPlaylists] = useState(true);
  const [playlists, setPlaylists] = useState([]);
  const [playlist, setPlaylist] = useState({})
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
      ? <Playlists title={countryName} 
          playlists={playlists} 
          setShowPlaylists={setShowPlaylists} 
          isLoading={isLoading}
          setPlaylist={setPlaylist}/> 
      : <PlaylistTracks  playlist={playlist} setShowPlaylists={setShowPlaylists}/>}
    </div>
  )
}
