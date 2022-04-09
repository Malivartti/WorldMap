import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getCountryName, getSearchValue } from '../store/selectors';
import { getSearch } from '../api';
import Playlists from './Playlists'
import PlaylistTracks from './PlaylistTracks'


export default function PlaylistModal() {
  const [showPlaylists, setShowPlaylists] = useState(true);
  const [playlistId, setPlaylistId] = useState('')
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
    <div className={`playlists ${showPlaylists ? '' : 'playlists_tracks'}`} onClick={e => e.stopPropagation()}>
      {showPlaylists
        ? <Playlists
          playlists={playlists}
          title={countryName}
          isLoading={isLoading}
          setShowPlaylists={setShowPlaylists}
          setPlaylistId={setPlaylistId} />
        : <PlaylistTracks
          playlistId={playlistId}
          showPlaylists={() => setShowPlaylists(true)}
        />}
    </div>
  )
}
