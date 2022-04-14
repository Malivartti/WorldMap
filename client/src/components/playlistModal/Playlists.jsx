import React, { useEffect } from 'react';
import PlaylistItem from './PlaylistItem'
import { getImageUrl } from '../../helper/index';
import { useSelector, useDispatch } from 'react-redux';
import { showTracks, openPlaylistModal, showPlaylist } from './../../store/Actions/windowDisplay';
import { addBlockPlaylist } from '../../store/Actions/appPlaylists';
import { getBlocked } from './../../store/Selectors/appPlaylists';
import { getChosenPlaylist } from '../../store/Selectors/appValues';
import { getRequestPlaylist } from '../../store/asuncActions/index'

export default function Playlists({ playlists, title, isLoading, setPlaylistId }) {
  const blockedPlaylists = useSelector(getBlocked)
  const chosenPlaylist = useSelector(getChosenPlaylist)
  const dispatch = useDispatch()

  function getPlaylistTracks(id) {
    dispatch(openPlaylistModal())
    dispatch(showTracks())
    console.log(playlists)
    setPlaylistId(id)
    dispatch(getRequestPlaylist(id));
    if (blockedPlaylists.includes(id)) showPlaylist();
    console.log(id)
    console.log(chosenPlaylist)
  }

  function blockPlaylist(id) {
    dispatch(showPlaylist())
    dispatch(addBlockPlaylist(id))
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
                  console.log(playlist.browseId)
                  getPlaylistTracks(playlist.browseId);
                }}
              />
            )
        }
      </div>
    </>
  )
}
