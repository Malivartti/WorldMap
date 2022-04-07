import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Track from './Track'
import PlaylistHeader from './PlaylistHeader';
import { getPlaylistData } from '../store/selectors';
import { formatTime, formatMillisecondsToSeconds } from '../helper';
import { setPlaylist } from '../store/Actions';

export default function PlaylistTracks({setShowPlaylists, playlist }) {
  const storePlaylist = useSelector(getPlaylistData)
  const dispatch = useDispatch();

  function handleClick() {
    if (playlist !== storePlaylist) dispatch(setPlaylist(playlist))
  }

  return (
    <>
      <button
        className='App__header-btn App__header-btn_return'
        onClick={() => setShowPlaylists(true)}
      ></button>
      <PlaylistHeader playlist={playlist}/>
      {playlist?.content?.map((track, index) => {
          return <Track 
            key={index}
            image={track.thumbnails.url || track.thumbnails[0].url}
            name={track.name}
            author={track.author.name}
            duration={formatTime(formatMillisecondsToSeconds(track.duration))}
            handleClick={handleClick}
          />
        })
      }
    </>
  )
}
