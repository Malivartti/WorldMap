import React from 'react'
import Song from './Song'

export default function PlaylistSongs({playlistName}) {
  return (
    <>
        <h2 className='title'>{playlistName}</h2>
        <Song />
        <Song />
    </>
  )
}
