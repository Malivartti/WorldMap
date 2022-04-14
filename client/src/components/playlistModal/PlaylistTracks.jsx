import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Track from './Track'
import PlaylistHeader from './PlaylistHeader';
import { getPlaylist } from '../../api'
import { useCountryName } from '../../hooks/useCountryName';
import { setPlayingTrack, setPlayingPlaylist } from './../../store/Actions/appValues';
import { getPlayingPlaylist, getChosenPlaylist } from '../../store/Selectors/appValues';
import { addBlockPlaylist } from '../../store/Actions/appPlaylists';
import { showPlaylist } from '../../store/Actions/windowDisplay';
import { setChosenPlaylist } from './../../store/Actions/appValues';

export default function PlaylistTracks({ playlistId }) {
  const chosenPlaylist = useSelector(getChosenPlaylist);
  const [isLoading, setIsLoading] = useState(false);
  const storePlaylist = useSelector(getPlayingPlaylist);
  const country = useCountryName(playlistId);
  const dispatch = useDispatch();

  function handleClick(track) {
    if (chosenPlaylist !== storePlaylist) dispatch(setPlayingPlaylist(chosenPlaylist))
    dispatch(setPlayingTrack({ ...track, country: country }))
  }

  function blockPlaylist(id) {
    dispatch(showPlaylist())
    dispatch(addBlockPlaylist(id))
  }

  useEffect(() => {
      // if (chosenPlaylist.owner === "You") return;

      const timerId = setTimeout(() => blockPlaylist(playlistId), 5000);
      setIsLoading(true)
      getPlaylist(playlistId)
        .then(res => {
          clearTimeout(timerId)
          setIsLoading(false);
          dispatch(setChosenPlaylist(res));
        })
        .catch(console.log)
  }, [playlistId])

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
          : (!Object.keys(chosenPlaylist).length)
            ? <h3>Not found</h3>
            : <>
              <PlaylistHeader playlist={chosenPlaylist} handleClick={handleClick} playlistId={playlistId} />
              {chosenPlaylist?.content?.map((track, index) => {
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
