import React, { useMemo, useEffect } from 'react'
import image from '../img/cassette.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getFavoritePlaylists, getFavoriteTracks } from '../store/selectors';
import Playlists from './Playlists';
import { setCurrentFavoritePlaylist } from '../store/Actions';
import { getCurrentFavoritePlaylist } from './../store/selectors';

export function Favorites({ closeFavorites }) {
  const playlists = useSelector(getFavoritePlaylists)
  const tracks = useSelector(getFavoriteTracks)
  const curentPlaylist = useSelector(getCurrentFavoritePlaylist)
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
    if (curentPlaylist !== null && typeof curentPlaylist === 'object') dispatch(setCurrentFavoritePlaylist(tracksPlaylist))
  }, [dispatch, curentPlaylist, tracksPlaylist])

  return (
    <div className="favorites">
      <h2 className='title'>Favorite tracks</h2>
      <img src={image} alt="" className="playlist__img" onClick={() => setFavoritePlaylist(tracksPlaylist)} />
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