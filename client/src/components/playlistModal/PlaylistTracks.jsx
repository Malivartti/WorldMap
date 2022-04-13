import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Track from './Track'
import PlaylistHeader from './PlaylistHeader';
import { getPlaylist } from '../../api'
import { useCountryName } from '../../hooks/useCountryName';
import { setPlayingTrack, setPlayingPlaylist } from './../../store/Actions/appValues';
import { getPlayingPlaylist } from '../../store/Selectors/appValues';
import { addBlockPlaylist } from '../../store/Actions/appPlaylists';
import { showPlaylist } from '../../store/Actions/windowDisplay';


export default function PlaylistTracks({ playlistId, playlist }) {
  const [currentPlaylist, setCurrentPlaylist] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const storePlaylist = useSelector(getPlayingPlaylist);
  const country = useCountryName(currentPlaylist);
  const dispatch = useDispatch();

  function handleClick(track) {
    if (currentPlaylist !== storePlaylist) dispatch(setPlayingPlaylist(currentPlaylist))
    dispatch(setPlayingTrack({ ...track, country: country }))
  }

  function blockPlaylist(id) {
    dispatch(showPlaylist())
    dispatch(addBlockPlaylist(id))
  }

  useEffect(() => {
    if (!playlist) {
      const timerId = setTimeout(() => blockPlaylist(playlistId), 5000)
      setCurrentPlaylist({})
      setIsLoading(true)
      getPlaylist(playlistId)
        .then(res => {
          clearTimeout(timerId)
          setIsLoading(false)
          setCurrentPlaylist(res)
        })
        .catch(console.log)
    } else {
      setCurrentPlaylist(playlist)
    }
  }, [playlist, playlistId])

  return (
    <>
      <button
        className='App__header-btn App__header-btn_return'
        onClick={() => dispatch(showPlaylist())}
      ></button>
      <div className='playlist__tracks'>
        {isLoading
          ? <div className='lds-ring'>
            <div></div>
          </div>
          : (!Object.keys(currentPlaylist).length)
            ? <h3>Not found</h3>
            : <>
              <PlaylistHeader playlist={currentPlaylist} handleClick={handleClick} playlistId={playlistId} />
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
