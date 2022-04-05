import React, { useState } from 'react';
import TrackSlider from './TrackSlider';
import Favorites from './Favorites';
import PlaylistModal from './Playlist';
import AppHeader from './AppHeader';
import Map from './Map';


function App() {
  const [isFavorites, setIsFavorites] = useState(false);
  const [isSelected, setSelected] = useState(false);

  return (
    <div className="App">
      {isFavorites && <Favorites />}
      <div className="main">
        <AppHeader handle={{ isFavorites, isSelected, setIsFavorites, setSelected }}/>
        <Map setSelected={setSelected}/>
        <TrackSlider />
      </div>
      {isSelected && <PlaylistModal />}
    </div>
  );
};

export default App;
