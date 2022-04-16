import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getSearch } from '../../api';
import Playlists from './Playlists'
import PlaylistTracks from './PlaylistTracks'
import { getShowPlaylists } from '../../store/Selectors/windowDisplay';
import { getSearchQuery } from './../../store/Selectors/appValues';

export default function PlaylistModal({ setError }) {
  const showPlaylists = useSelector(getShowPlaylists);
  const searchQuery = useSelector(getSearchQuery);

  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true)
      getSearch(searchQuery).then(res => {
        setIsLoading(false)
        setPlaylists(res)
      });
    }
  }, [searchQuery])

  return (
    <div className={`playlists ${showPlaylists ? '' : 'playlists_tracks'}`} onClick={e => e.stopPropagation()}>
      {showPlaylists
        ? <Playlists
          playlists={playlists}
          title={searchQuery}
          isLoading={isLoading}
        />
        : <PlaylistTracks
          setError={setError}
        />}
    </div>
  )
}