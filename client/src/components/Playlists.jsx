import React from 'react'
import PlaylistItem from './PlaylistItem'
import playlistPlaceholder from '../img/playlistPlaceholder.jpg'
import { getPlaylist } from '../api'

export default function Playlists({ title, playlists, isLoading, setShowPlaylists, setPlaylist}) {
  function getPlaylistTracks(id){
    setShowPlaylists(false);
    getPlaylist(id).then(res => setPlaylist(res)) 
  }

  return (
    <>
      <h2 className='title'>{title}</h2>
      <div className='playlists__list'>
        {isLoading
          ? <div className='lds-ring'>
            <div></div>
          </div>
          : playlists.map((playlist) => {
            return <PlaylistItem
              key={playlist.browseId}
              name={playlist.title}
              image={playlist?.thumbnails[0]?.url || playlistPlaceholder}
              showPlaylistTracks={() => {
                getPlaylistTracks(playlist.browseId)
              }}
            />
          })
        }
      </div>
    </>
  )
}
