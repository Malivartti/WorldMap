import React from 'react';
import PlaylistItem from './PlaylistItem'
import { getImageUrl } from '../../helper/index';
import { useSelector, useDispatch } from 'react-redux';
import { showTracks } from './../../store/Actions/windowDisplay';
import { getBlocked } from './../../store/Selectors/appPlaylists';
import { getRequestPlaylist } from '../../store/asuncActions/index'


export default function Playlists({ playlists, title, isLoading, setPlaylistId }) {
  const blockedPlaylists = useSelector(getBlocked)
  const dispatch = useDispatch()

  function getPlaylistTracks(id) {
    dispatch(showTracks())
    setPlaylistId(id)
    dispatch(getRequestPlaylist(id));
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
                showPlaylistTracks={() => getPlaylistTracks(playlist.browseId)}
              />
            )
        }
      </div>
    </>
  )
}
