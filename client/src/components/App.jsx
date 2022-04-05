import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import TrackSlider from './TrackSlider';
import Favorites from './Favorites';

import PlaylistModal from './Playlist';
import world from '@svg-maps/world'
import { SVGMap } from 'react-svg-map'
import AppHeader from './AppHeader';
import { getRequestCountry } from './../store/asuncActions/index';
import { setSearchValue } from '../store/Actions';

function App() {
  const [isFavorites, setIsFavorites] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const dispatch = useDispatch()

  function handleClick(e) {
    setSelected(true);
    dispatch(getRequestCountry(e.target.id)); 
    (console.log(e.target.id))
    dispatch(setSearchValue({value: '', isFormRequest: false}))
  }

  return (
    <div className="App">
      {isFavorites && <Favorites />}
      <div className="main">
        <AppHeader handle={{ isFavorites, isSelected, setIsFavorites, setSelected }} />
        <SVGMap className='map' map={world} onLocationClick={handleClick} />
        <TrackSlider />
      </div>
      {isSelected && <PlaylistModal />}
    </div>
  );
};

export default App;
