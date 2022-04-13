import React, { useMemo, useEffect } from 'react'
import image from '../img/GettyImages-1329515378.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { getFavoritePlaylists, getFavoriteTracks } from '../store/selectors';
import Playlists from './playlistModal/Playlists';
import { setCurrentFavoritePlaylist } from '../store/Actions';
import { getCurrentFavoritePlaylist } from './../store/selectors';

export function Favorites() {
  const playlists = useSelector(getFavoritePlaylists)
  const tracks = useSelector(getFavoriteTracks)
  const currentPlaylist = useSelector(getCurrentFavoritePlaylist)
  const tracksPlaylist = useMemo(() => ({
    owner: 'You',
    title: 'Your Favorite Tracks',
    dateYear: '2022',
    thumbnails: { url: image },
    trackCount: tracks.length,
    content: tracks,
  }), [tracks])
  
  const dispatch = useDispatch()

  function setFavoritePlaylist(value) {
    dispatch(setCurrentFavoritePlaylist(value))
  }

  useEffect(() => {
    if (currentPlaylist !== null && typeof currentPlaylist === 'object') dispatch(setCurrentFavoritePlaylist(tracksPlaylist))
  }, [dispatch, currentPlaylist, tracksPlaylist])

  return (
    <div className="favorites">
      <h2 className='title'>Favorite tracks</h2>
      <img src={image} alt="" className="playlist-my__img" onClick={() => setFavoritePlaylist(tracksPlaylist)} />
      <Playlists
        playlists={playlists}
        title='Favorite Playlists'
        isLoading={false}
        setShowPlaylists={() => undefined}
        setPlaylistId={setFavoritePlaylist}
        setPlaylist={() => undefined}
      />
    </div>
  )
}

export default Favorites;