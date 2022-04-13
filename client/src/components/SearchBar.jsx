import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../store/Actions/appValues';
import { openPlaylistModal, showPlaylist } from '../store/Actions/windowDisplay';

export function SearchBar() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(value));
    dispatch(openPlaylistModal())
    dispatch(showPlaylist())
    setValue('');
  }

  return (
    <form
      className='searchBar'
      onSubmit={handleSubmit}
    >
      <input className="searchBar__input"
        type="text"
        placeholder="Enter or Click a Country"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  )
}

export default SearchBar