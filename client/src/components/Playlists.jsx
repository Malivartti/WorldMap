import React from 'react';
import PlaylistItem from './PlaylistItem'
import { getImageUrl } from './../helper/index';
import { useSelector } from 'react-redux';
import { getBlockedPlaylist } from './../store/selectors';


export default function Playlists({ playlists, title, isLoading, setShowPlaylists, setPlaylistId, setPlaylist }) {
  const blockedPlaylists = useSelector(getBlockedPlaylist)

  function getPlaylistTracks(id) {
    setShowPlaylists(false);
    setPlaylistId(id)
    setPlaylist(null)
  }

  return (
    <>
      <h2 className='title'>{title}</h2>
      <div className='playlists__list'>
        {isLoading
          ? <div className='lds-ring '>
            <div></div>
          </div>
          : !playlists.length
            ? <h3>Not found</h3>
            : playlists.filter(playlist => !blockedPlaylists.includes(playlist.browseId)).map((playlist) =>
              <PlaylistItem
                key={playlist.browseId}
                name={playlist.title}
                image={getImageUrl(playlist)}
                showPlaylistTracks={() => {
                  getPlaylistTracks(playlist.browseId)
                }}
              />
            )
        }
      </div>
    </>
  )
}
