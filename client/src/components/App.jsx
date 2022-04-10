import React, { useState, useEffect } from 'react';
import TrackSlider from './TrackSlider';
import Favorites from './Favorites';
import PlaylistModal from './PlaylistModal';
import AppHeader from './AppHeader';
import Map from './Map';
import { getCurrentFavoritePlaylist } from './../store/selectors';
import { useSelector } from 'react-redux';

function App() {
  const [isFavorites, setIsFavorites] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const currentFavoritePlaylist = useSelector(getCurrentFavoritePlaylist)

  useEffect(() => {
    if (typeof currentFavoritePlaylist === 'string' || currentFavoritePlaylist !== null) {
      setSelected(true)
    }
  }, [currentFavoritePlaylist])


  return (
    <div className="App">
      {isFavorites && <Favorites closeFavorites={setIsFavorites} />}
      <div className="main">
        <AppHeader handle={{ isFavorites, isSelected, setIsFavorites, setSelected }} />
        <Map setSelected={setSelected} />
        <TrackSlider />
      </div>
      {isSelected && <PlaylistModal currentFavoritePlaylist={currentFavoritePlaylist}/>}
    </div>
  );
};

export default App;
