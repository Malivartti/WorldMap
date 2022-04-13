import React from 'react'
import { SearchBar } from './SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { getOpenPlaylistModal } from '../store/Selectors/windowDisplay';
import { openPlaylistModal, closePlaylistModal } from './../store/Actions/windowDisplay';

function AppHeader({ isFavorites, setIsFavorites }) {
  const showPlaylistModal = useSelector(getOpenPlaylistModal)
  const dispatch = useDispatch()

  return (
    <div className='App__header'>
      <button
        className='App__header-btn App__header-btn_favorites'
        onClick={() => setIsFavorites(!isFavorites)}
      ></button>
      <SearchBar />
      <button
        className='App__header-btn App__header-btn_playlists'
        onClick={() => dispatch(showPlaylistModal ? closePlaylistModal() : openPlaylistModal())}
      ></button>
    </div>
  )
}

export default AppHeader