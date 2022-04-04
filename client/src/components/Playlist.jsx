import React, { useState } from 'react'
import PlaylistsList from './PlaylistsList'
import PlaylistSongs from './PlaylistSongs'


export default function PlaylistModal({ playlists }) {
  const [showPlaylists, setShowPlaylists] = useState(true);
  // const 

  return (
    <div className="playlists">
      {showPlaylists 
      ? <PlaylistsList title={'Country'} playlists={playlists} setShowPlaylists={setShowPlaylists}/> 
      : <PlaylistSongs playlistName="Вечерний плейлист" />}
    </div>
  )
}

