import React, { useMemo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import image from '../img/GettyImages-1329515378.jpg';
import Playlists from './playlistModal/Playlists';
import { getFavoritePlaylists } from '../store/Selectors/appPlaylists';
import { getChosenPlaylist } from '../store/Selectors/appValues';
import { getFavoriteTracks } from './../store/Selectors/appPlaylists';
import { setChosenPlaylist } from '../store/Actions/appValues';
import { openPlaylistModal, showTracks } from '../store/Actions/windowDisplay';


export function Favorites() {
  const favoritePlaylists = useSelector(getFavoritePlaylists)
  const favoriteTracks = useSelector(getFavoriteTracks)
  const chosenPlaylist = useSelector(getChosenPlaylist)

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
    dispatch(setChosenPlaylist(value))
  }

  function showFavoritePlaylist() {
    setFavoritePlaylist(favoriteTracksPlaylist);
    dispatch(openPlaylistModal())
    dispatch(showTracks())
  }

  useEffect(() => {
    if (chosenPlaylist.owner === 'You' && chosenPlaylist.title === 'My Favorite Tracks') {
      setFavoritePlaylist(favoriteTracksPlaylist)
    }
  }, [dispatch, favoriteTracks])

  return (
    <div className="favorites">
      <h2 className='title'>Favorite tracks</h2>
      <img src={image} alt="" className="playlist-my__img" onClick={showFavoritePlaylist} />
      <Playlists
        playlists={favoritePlaylists}
        title='Favorite Playlists'
        isLoading={false}
        setPlaylistId={setFavoritePlaylist}
      />
    </div>
  )
}

export default Favorites;