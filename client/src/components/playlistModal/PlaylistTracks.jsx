import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Track from './Track'
import PlaylistHeader from './PlaylistHeader';
import { useCountryName } from '../../hooks/useCountryName';
import { getPlayingPlaylist, getChosenPlaylist, getChosenPlaylistIsLoading, getChosenPlaylistId } from '../../store/Selectors/appValues';
import { setPlayingTrack, setPlayingPlaylist } from './../../store/Actions/appValues';
import { addBlockPlaylist } from '../../store/Actions/appPlaylists';
import { showPlaylist } from '../../store/Actions/windowDisplay';


export default function PlaylistTracks({ setError }) {
  const chosenPlaylist = useSelector(getChosenPlaylist);
  const chosenPlaylistId = useSelector(getChosenPlaylistId)
  const isLoading = useSelector(getChosenPlaylistIsLoading);
  const playingPlaylist = useSelector(getPlayingPlaylist);
  const country = useCountryName(chosenPlaylistId);
  const dispatch = useDispatch();

  function handleClick(track) {
    if (chosenPlaylist.content.length) {
      if (chosenPlaylist !== playingPlaylist) dispatch(setPlayingPlaylist(chosenPlaylist))
      dispatch(setPlayingTrack({ ...track, country: country, currentTime: 0 }))
    }
  }

  useEffect(() => {
    const timeId = setTimeout(() => blockPlaylist(chosenPlaylistId), 5000);
    if (!isLoading) clearTimeout(timeId)
    return () => clearTimeout(timeId)
  }, [chosenPlaylistId, isLoading])

  function blockPlaylist(id) {
    setError('Playlist is not available')
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
        {isLoading
          ? <div className='lds-ring'>
            <div></div>
          </div>
          : <>
            <PlaylistHeader playlist={chosenPlaylist} handleClick={handleClick} playlistId={chosenPlaylistId} />
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
