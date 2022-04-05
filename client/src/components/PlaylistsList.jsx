import React from 'react'
import { useDispatch } from 'react-redux'
import PlaylistItem from './PlaylistItem'
import playlistPlaceholder from '../img/playlistPlaceholder.jpg'
import { getRequestPlaylist } from '../store/asuncActions'
import { getPlaylist } from '../api'

export default function PlaylistsList({ title, playlists, setShowPlaylists, isLoading }) {
  const dispatch = useDispatch();

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
              onClick={() => {
                setShowPlaylists(false)
                dispatch(getRequestPlaylist(playlist.browseId))
              }}
            />
          })
        }
      </div>
    </>
  )
}
