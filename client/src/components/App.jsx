import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import TrackSlider from './TrackSlider';
import Favorites from './Favorites';

import PlaylistModal from './Playlist';
import world from '@svg-maps/world'
import { SVGMap } from 'react-svg-map'
import AppHeader from './AppHeader';
import { getRequestCountry } from './../store/asuncActions/index';
import { getSearch } from '../api/index'

function App() {
  const [isFavorites, setIsFavorites] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const country = useSelector((state) => state.country.en);
  const dispatch = useDispatch()

  async function handleClick(e) {
    setSelected(true);
    dispatch(getRequestCountry(e.target.id)); 
  }

  useEffect(() => {
     function getSearchResult() {
      getSearch(country).then(res => setPlaylists(res));
    }
    getSearchResult();
  }, [country])

  return (
    <div className="App">
      {isFavorites && <Favorites />}
      <div className="main">
        <AppHeader handle={{ isFavorites, isSelected, setIsFavorites, setSelected }} />
        <SVGMap className='map' map={world} onLocationClick={handleClick} />
        <TrackSlider />
      </div>
      {isSelected && <PlaylistModal playlists={playlists}/>}
    </div>
  );
};

export default App;
