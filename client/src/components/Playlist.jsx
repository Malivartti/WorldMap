import React, { useState } from 'react'
import PlaylistsList from './PlaylistsList'
import PlaylistSongs from './PlaylistSongs'


export default function PlaylistModal() {
  const [isClicked, setClicked] = useState(false);

  return (
    <div className="modal">
      { !isClicked ? <PlaylistsList /> : <PlaylistSongs playlistName="Вечерний плейлист"/>}
    </div>
  )
}

