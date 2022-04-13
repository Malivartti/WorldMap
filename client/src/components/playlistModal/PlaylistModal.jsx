import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCountryName, getSearchValue, getCurrentFavoritePlaylist } from '../../store/selectors';
import { getSearch } from '../../api';
import Playlists from './Playlists'
import PlaylistTracks from './PlaylistTracks'
import { setCurrentFavoritePlaylist } from '../../store/Actions';

export default function PlaylistModal() {
  const [showPlaylists, setShowPlaylists] = useState(true);
  const [playlistId, setPlaylistId] = useState('')
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playlist, setPlaylist] = useState(null);
  const searchValue = useSelector(getSearchValue);
  const currentFavoritePlaylist = useSelector(getCurrentFavoritePlaylist);
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof currentFavoritePlaylist === 'string') {
      setPlaylistId(currentFavoritePlaylist);
      setShowPlaylists(false)
      setPlaylist(null)
      dispatch(setCurrentFavoritePlaylist(null))
    } else if (currentFavoritePlaylist !== null) {
      setPlaylist(currentFavoritePlaylist);
      setShowPlaylists(false);
    }
  }, [dispatch, currentFavoritePlaylist])


  useEffect(() => {
    if (searchValue) {
      setIsLoading(true)
      setShowPlaylists(true)
      dispatch(setCurrentFavoritePlaylist(null))
      getSearch(searchValue).then(res => {
        setIsLoading(false)
        setPlaylists(res)
      });
    }
  }, [searchValue])

  return (
    <div className={`playlists ${showPlaylists ? '' : 'playlists_tracks'}`} onClick={e => e.stopPropagation()}>
      {showPlaylists
        ? <Playlists
          playlists={playlists}
          playlist={playlist}
          title={searchValue}
          isLoading={isLoading}
          setShowPlaylists={setShowPlaylists}
          setPlaylistId={setPlaylistId}
          setPlaylist={setPlaylist}
           />
        : <PlaylistTracks
          playlistId={playlistId}
          showPlaylists={() => setShowPlaylists(true)}
        />}
    </div>
  )
}
