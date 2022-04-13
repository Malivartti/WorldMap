import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import image from '../img/GettyImages-1329515378.jpg';
import { getFavoritePlaylists } from '../store/Selectors/appPlaylists';
import Playlists from './playlistModal/Playlists';
import { getFavoriteTracks } from './../store/Selectors/appPlaylists';
import { setPlayingPlaylist } from '../store/Actions/appValues';


export function Favorites() {
  const favoritePlaylists = useSelector(getFavoritePlaylists)
  const favoriteTracks = useSelector(getFavoriteTracks)
  const favoriteTracksPlaylist = useMemo(() => ({
    owner: 'You',
    title: 'My Favorite Tracks',
    dateYear: '2022',
    thumbnails: { url: image },
    trackCount: favoriteTracks.length,
    content: favoriteTracks,
  }), [favoriteTracks])
  
  const dispatch = useDispatch()

  function setFavoritePlaylist(value) {
    dispatch(setPlayingPlaylist(value))
  }

  return (
    <div className="favorites">
      <h2 className='title'>Favorite tracks</h2>
      <img src={image} alt="" className="playlist-my__img" onClick={() => setFavoritePlaylist(favoriteTracksPlaylist)} />
      <Playlists
        playlists={favoritePlaylists}
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