import React, { useState, useEffect } from 'react';
import TrackSlider from './TrackSlider';
import Favorites from './Favorites';
import PlaylistModal from './playlistModal/PlaylistModal';
import AppHeader from './AppHeader';
import Map from './Map';
import { getCurrentFavoritePlaylist } from './../store/selectors';
import { useSelector } from 'react-redux';
import { getBlockedPlaylist } from '../store/selectors';

function App() {
  const [isFavorites, setIsFavorites] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const [error, setError] = useState('')
  const currentFavoritePlaylist = useSelector(getCurrentFavoritePlaylist)
  const blockedPlaylists = useSelector(getBlockedPlaylist)

  useEffect(() => {
    if (typeof currentFavoritePlaylist === 'string' || currentFavoritePlaylist !== null) {
      setSelected(true)
    }
  }, [currentFavoritePlaylist])

  useEffect(() => {
    if (blockedPlaylists.length) {
      setError('Playlist is not available')
      setTimeout(() => setError(''), 3000)
    }
  }, [blockedPlaylists])


  return (
    <div className="App">
      {isFavorites && <Favorites closeFavorites={setIsFavorites} />}
      <div className="main">
        <h2 className={`track-slider__modal ${error ? 'visible' : ''}`}>{error}</h2>
        <AppHeader handle={{ isFavorites, isSelected, setIsFavorites, setSelected }} />
        <Map setSelected={setSelected} />
        <TrackSlider setError={setError} />
      </div>
      {isSelected && <PlaylistModal currentFavoritePlaylist={currentFavoritePlaylist} />}
    </div>
  );
};

export default App;
