import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSearch } from '../../api';
import Playlists from './Playlists'
import PlaylistTracks from './PlaylistTracks'
import { getSearchQuery } from './../../store/Selectors/appValues';
import { getShowPlaylists } from '../../store/Selectors/windowDisplay';


export default function PlaylistModal() {
  const showPlaylists = useSelector(getShowPlaylists)
  const [playlistId, setPlaylistId] = useState('')
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playlist, setPlaylist] = useState(null);
  const searchQuery = useSelector(getSearchQuery);
  const dispatch = useDispatch()


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
          setPlaylistId={setPlaylistId}
          setPlaylist={setPlaylist}
           />
        : <PlaylistTracks
          playlistId={playlistId}
          playlist={playlist}
        />}
    </div>
  )
}
