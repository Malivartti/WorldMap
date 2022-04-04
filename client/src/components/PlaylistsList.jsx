import React from 'react'
import PlaylistItem from './PlaylistItem'


export default function PlaylistsList({ title, playlists, setShowPlaylists }) {
  
  return (
    <>
      <h2 className='title'>{title}</h2>
      <div className='playlists__list'>
        {playlists.map((playlist) => {
          return <PlaylistItem
            key={playlist.browseId}
            name={playlist.title}
            image={playlist?.thumbnails[0]?.url || playlist?.thumbnails?.url}
            onClick={() => setShowPlaylists(false)}
          />
        })}
      </div>
    </>
  )
}
