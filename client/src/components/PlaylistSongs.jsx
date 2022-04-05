import React from 'react'
import Song from './Song'


export default function PlaylistSongs({playlistName, setShowPlaylists}) {
  return (
    <>
        <button
        className='App__header-btn App__header-btn_return'
        onClick={() => setShowPlaylists(true)}
      ></button>
        <h2 className='title'>{playlistName}</h2>
        <Song />
        <Song />
    </>
  )
}
