import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useCountryName } from '../../hooks/useCountryName';
import { getPlayingTrack, getPlayingPlaylist } from '../../store/Selectors/appValues';
import { setPlayingTrack, setIsTrackPlaying } from '../../store/Actions/appValues';
import TrackInfo from './TrackInfo';
import InfoBtns from './InfoBtns';
import ControlBtns from './ControlBtns';
import Soundtrack from './Soundtrack';
import Video from './Video';

export default function TrackSlider({setError}) {
  const trackData = useSelector(getPlayingTrack);
  const playlist = useSelector(getPlayingPlaylist).content;
  const country = useCountryName(trackData);
  
  const dispatch = useDispatch()

  const [player, setPlayer] = useState(null)
  const [volume, setVolume] = useState(50)
  const [isShow, setIsShow] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  
  function onReady(e) {
    setPlayer(e.target)
    e.target.playVideo();
    dispatch(setIsTrackPlaying(true))
  }

  function handleVolume(e) {
    player.setVolume(e.target.value)
    setVolume(e.target.value)
  }
  
  function getIndexTrack() {
    return playlist?.findIndex(track => track.videoId === trackData.videoId)
  }

  function setTrackOnPlaylist(index) {
    if (isRepeat && index === -1) {
      dispatch(setPlayingTrack({ ...playlist[playlist.length - 1], country: country }))
    }
    if (isRepeat && index === playlist.length) {
      dispatch(setPlayingTrack({ ...playlist[0], country: country }))
    }
    if (0 <= index && index < playlist.length) {
      dispatch(setPlayingTrack({ ...playlist[index], country: country }))
    }
  }


  if (!Object.keys(trackData).length) return null
  return (
    <>
      <Video
        trackData={trackData}
        onReady={onReady}
        setError={setError}
        setTrackOnPlaylist={setTrackOnPlaylist}
        getIndexTrack={getIndexTrack}
        isShow={isShow}
      />
      <div className="track-slider">
        <div className='track-slider__info'>
          <TrackInfo trackData={trackData}/>
          <InfoBtns 
            isShow={isShow} 
            setIsShow={setIsShow} 
            isRepeat={isRepeat} 
            setIsRepeat={setIsRepeat}/>
        </div>
        <div className='track-slider__control'>
          <ControlBtns 
            setTrackOnPlaylist={setTrackOnPlaylist}
            getIndexTrack={getIndexTrack}
            player={player}
          />
          <Soundtrack 
            trackData={trackData}
            player={player}
          />
        </div>
        <input className='track-slider__volume' type="range" min="0" max="100" value={volume} onInput={handleVolume} />
      </div>
    </>
  )
}
