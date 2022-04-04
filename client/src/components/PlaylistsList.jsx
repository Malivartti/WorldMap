import React from 'react'
import PlaylistItem from './PlaylistItem'


export default function PlaylistsList({ title, playlists, setShowPlaylists }) {

  return (
    <>
      <h2 className='title'>{title}</h2>
      <div className='playlists__list'>
        {playlists.map((playlist, index) =>
          <PlaylistItem
            key={index}
            name={playlist.name}
            onClick={() => setShowPlaylists(false)}
          />
        )}
      </div>
    </>
  )
}
