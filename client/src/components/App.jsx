import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TrackSlider from './TrackSlider/TrackSlider';
import Favorites from './Favorites';
import PlaylistModal from './playlistModal/PlaylistModal';
import AppHeader from './AppHeader';
import Map from './Map';
import { getOpenPlaylistModal } from './../store/Selectors/windowDisplay';


function App() {
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [error, setError] = useState('');
  const showPlaylistModal = useSelector(getOpenPlaylistModal)

  useEffect(() => {
    if (error) setTimeout(() => setError(''), 3000)
  }, [error])

  return (
    <div className="App">
      {isFavoritesOpen && <Favorites />}
      <div className="main">
        <h2 className={`track-slider__modal ${error ? 'visible' : ''}`}>{error}</h2>
        <AppHeader isFavorites={isFavoritesOpen} setIsFavorites={setIsFavoritesOpen} />
        <Map />
        <TrackSlider setError={setError} />
      </div>
      {showPlaylistModal && <PlaylistModal setError={setError} />}
    </div>
  );
};

export default App;
