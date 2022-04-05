import React from 'react'
import Song from './Song'
import PlaylistHeader from './PlaylistHeader';
import { useSelector } from 'react-redux';
import { getPlaylistData } from '../store/selectors';
import { formatTime } from '../helper';

export default function PlaylistSongs({setShowPlaylists}) {
  const playlist = useSelector(getPlaylistData)

  return (
    <>
      <button
        className='App__header-btn App__header-btn_return'
        onClick={() => setShowPlaylists(true)}
      ></button>
      <PlaylistHeader />
        {/* <h2 className='title'>{playlist.title}</h2> */}
        {playlist?.content?.map((track, index) => {
          return <Song 
            key={index}
            image={track.thumbnails.url}
            name={track.name}
            author={track.author.name}
            duration={formatTime(Math.round(track.duration / 1000))}
            />
        })
        }
    </>
  )
}
