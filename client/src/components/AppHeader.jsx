import React from 'react'
import { SearchBar } from './SearchBar';

function AppHeader({ handle }) {
  return (
    <div className='App__header'>
      <button
        className='App__header-btn App__header-btn_favorites'
        onClick={() => handle.setIsFavorites(!handle.isFavorites)}
      ></button>
      <SearchBar />
      <button
        className='App__header-btn App__header-btn_playlists'
        onClick={() => handle.setSelected(!handle.isSelected)}
      ></button>
    </div>
  )
}

export default AppHeader