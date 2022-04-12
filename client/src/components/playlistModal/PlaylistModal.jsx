import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCountryName, getSearchValue } from '../../store/selectors';
import { getSearch } from '../../api';
import Playlists from './Playlists'
import PlaylistTracks from './PlaylistTracks'
import { setCurrentFavoritePlaylist } from '../../store/Actions';

export default function PlaylistModal({ currentFavoritePlaylist }) {
  const [showPlaylists, setShowPlaylists] = useState(true);
  const [playlistId, setPlaylistId] = useState('')
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playlist, setPlaylist] = useState(null);
  
  const country = useSelector(getCountryName);
  const search = useSelector(getSearchValue);
  const countryName = search.isFormRequest ? search.value : country;
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof currentFavoritePlaylist === 'string') {
      setPlaylistId(currentFavoritePlaylist)
      setShowPlaylists(false)
      setPlaylist(null)
      dispatch(setCurrentFavoritePlaylist(null))
    } else if (currentFavoritePlaylist !== null) {
      setPlaylist(currentFavoritePlaylist)
      setShowPlaylists(false)
    }
  }, [dispatch, currentFavoritePlaylist])


  useEffect(() => {
    if (countryName) {
      setIsLoading(true)
      setShowPlaylists(true)
      dispatch(setCurrentFavoritePlaylist(null))
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
          setPlaylistId={setPlaylistId}
          setPlaylist={setPlaylist}
           />
        : <PlaylistTracks
          playlistId={playlistId}
          playlist={playlist}
          showPlaylists={() => setShowPlaylists(true)}
        />}
    </div>
  )
}
