import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Track from './Track'
import PlaylistHeader from './PlaylistHeader';
import { getPlaylistData } from '../store/selectors';
import { setPlaylist } from '../store/Actions';
import { getPlaylist } from '../api'
import { setTrack } from './../store/Actions/index';


export default function PlaylistTracks({ playlistId, setShowPlaylists }) {
  const [currentPlaylist, setCurrentPlaylist] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const storePlaylist = useSelector(getPlaylistData)
  const dispatch = useDispatch();

  function handleClick(track) {
    if (currentPlaylist !== storePlaylist) dispatch(setPlaylist(currentPlaylist))
    dispatch(setTrack(track))
  }

  useEffect(() => {
    setCurrentPlaylist({})
    setIsLoading(true)
    getPlaylist(playlistId)
      .then(res => {
        setIsLoading(false)
        setCurrentPlaylist(res)
      })
      .catch(console.log)
  }, [playlistId])

  return (
    <>
      <button
        className='App__header-btn App__header-btn_return'
        onClick={() => setShowPlaylists(true)}
      ></button>
      <div className='playlist__tracks'>
        {isLoading
          ? <div className='lds-ring'>
            <div></div>
          </div>
          : (!Object.keys(currentPlaylist).length)
            ? <h3>Not found</h3>
            : <>
              <PlaylistHeader playlist={currentPlaylist} handleClick={handleClick}/>
              {currentPlaylist?.content?.map((track, index) => {
                return <Track
                  key={index}
                  trackData={track}
                  handleClick={handleClick}
                />
              })
              }
            </>
        }
      </div>
    </>
  )
}