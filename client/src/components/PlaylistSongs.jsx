import React from 'react'
import Song from './Song'
import PlaylistModal from './Playlist';


export default function PlaylistSongs({playlistName}, {PlaylistModal}) {
  return (
    <>
        <button
        className='App__header-btn App__header-btn_return'
        onClick={() => PlaylistModal}
      ></button>
        <h2 className='title'>{playlistName}</h2>
        <Song />
        <Song />
    </>
  )
}
