import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Track from './Track'
import PlaylistHeader from './PlaylistHeader';
import { useCountryName } from '../../hooks/useCountryName';
import { getPlayingPlaylist, getChosenPlaylist, getLoadingStatus } from '../../store/Selectors/appValues';
import { setPlayingTrack, setPlayingPlaylist } from './../../store/Actions/appValues';
import { addBlockPlaylist } from '../../store/Actions/appPlaylists';
import { showPlaylist } from '../../store/Actions/windowDisplay';


export default function PlaylistTracks({ playlistId }) {
  const chosenPlaylist = useSelector(getChosenPlaylist);
  const storePlaylist = useSelector(getPlayingPlaylist);
  const loadingStatus = useSelector(getLoadingStatus)
  const country = useCountryName(playlistId);
  const dispatch = useDispatch();

  function handleClick(track) {
    if (chosenPlaylist !== storePlaylist) dispatch(setPlayingPlaylist(chosenPlaylist))
    dispatch(setPlayingTrack({ ...track, country: country, currentTime: 0 }))
  }

  useEffect(() => {
    const timeId = setTimeout(() => blockPlaylist(playlistId), 5000);
    if (loadingStatus === 'idle') clearTimeout(timeId)
    return () => clearTimeout(timeId)
  }, [playlistId, loadingStatus])

  function blockPlaylist(id) {
    dispatch(showPlaylist())
    dispatch(addBlockPlaylist(id))
  }

  return (
    <>
      <button
        className='App__header-btn App__header-btn_return'
        onClick={() => dispatch(showPlaylist())}
      ></button>
      <div className='playlist__tracks'>
        {loadingStatus === "loading"
          ? <div className='lds-ring'>
            <div></div>
          </div>
          : <>
            <PlaylistHeader playlist={chosenPlaylist} handleClick={handleClick} playlistId={playlistId} />
            {!chosenPlaylist?.content.length
              ? <h3>Not Found</h3>
              :
              chosenPlaylist?.content?.map((track, index) => {
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
