import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import TrackSlider from './TrackSlider/TrackSlider';
import Favorites from './Favorites';
import PlaylistModal from './playlistModal/PlaylistModal';
import AppHeader from './AppHeader';
import Map from './Map';
import { getOpenPlaylistModal } from './../store/Selectors/windowDisplay';
import { getBlocked } from './../store/Selectors/appPlaylists';


function App() {
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [error, setError] = useState('');
  const blockedPlaylists = useSelector(getBlocked)
  const showPlaylistModal = useSelector(getOpenPlaylistModal)
  const firstLaunch = useRef(true)

  useEffect(() => {
    if (!firstLaunch.current) {
      setError('Playlist is not available')
      setTimeout(() => setError(''), 3000)
    }
    firstLaunch.current = false
  }, [blockedPlaylists])

  return (
    <div className="App">
      {isFavoritesOpen && <Favorites />}
      <div className="main">
        <h2 className={`track-slider__modal ${error ? 'visible' : ''}`}>{error}</h2>
        <AppHeader  isFavorites={isFavoritesOpen} setIsFavorites={setIsFavoritesOpen}  />
        <Map />
        <TrackSlider setError={setError} />
      </div>
      {showPlaylistModal && <PlaylistModal />}
    </div>
  );
};

export default App;
