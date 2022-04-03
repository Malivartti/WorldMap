import React, { useState } from 'react'
import PlaylistsList from './PlaylistsList'
import PlaylistSongs from './PlaylistSongs'


export default function PlaylistModal() {
  const [showPlaylists, setShowPlaylists] = useState(true);
  const playlists = [{name: 'TItle'}, {name: 'Nmsmddjdj'}, {name: '3inbhgugig'}]

  return (
    <div className="playlists">
      {showPlaylists 
      ? <PlaylistsList title={'Country'} playlists={playlists} setShowPlaylists={setShowPlaylists}/> 
      : <PlaylistSongs playlistName="Вечерний плейлист" />}
    </div>
  )
}

