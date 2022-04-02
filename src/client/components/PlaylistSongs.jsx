import React from 'react'
import Song from './Song'

export default function PlaylistSongs({playlistName}) {
  return (
    <>
        <h1>{playlistName}</h1>
        <Song />
        <Song />
    </>
  )
}
