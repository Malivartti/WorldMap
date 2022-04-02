import React, { useState } from 'react';
import world from '@svg-maps/world'
import { SVGMap } from 'react-svg-map'
import Form from './Form'
import TrackSlider from './TrackSlider';
import Favorites from './Favorites';
import PlaylistModal from './Playlist';
function App() {
  const [country, setCountry] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isSelected, setSelected] = useState(true);

  function handleClick(e){
    setCountry(e.target.id)
    console.log(e.target.id);
  }

  return (
    <div className="App">
      <Favorites />
      <div className="main">
        <Form />
        <SVGMap map={world} onLocationClick={handleClick} />
        <TrackSlider />
        {isSelected && <PlaylistModal />}
      </div>
    </div>
  );
};

export default App;
