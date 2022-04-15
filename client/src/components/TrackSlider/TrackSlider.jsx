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
  const playingTrack = useSelector(getPlayingTrack);
  const playingPlaylist = useSelector(getPlayingPlaylist).content;
  const trackCountry = useCountryName(playingTrack);
  const dispatch = useDispatch()

  const [player, setPlayer] = useState(null)
  const [volume, setVolume] = useState(50)
  const [isShowVideo, setIsShow] = useState(false)
  const [isRepeatPlaylist, setIsRepeat] = useState(false)
  
  function onReady(e) {
    setPlayer(e.target)
    e.target.playVideo();
    e.target.setVolume(volume)
    dispatch(setIsTrackPlaying(true))
  }

  function handleVolume(e) {
    player.setVolume(e.target.value)
    setVolume(e.target.value)
  }
  
  function getIndexTrack() {
    return playingPlaylist?.findIndex(track => track.videoId === playingTrack.videoId)
  }

  function setTrackOnPlaylist(index) {
    if (isRepeatPlaylist && index === -1) {
      dispatch(setPlayingTrack({ ...playingPlaylist[playingPlaylist.length - 1], country: trackCountry }))
    }
    if (isRepeatPlaylist && index === playingPlaylist.length) {
      dispatch(setPlayingTrack({ ...playingPlaylist[0], country: trackCountry }))
    }
    if (0 <= index && index < playingPlaylist.length) {
      dispatch(setPlayingTrack({ ...playingPlaylist[index], country: trackCountry }))
    }
  }


  if (!Object.keys(playingTrack).length) return null
  return (
    <>
      <Video
        trackData={playingTrack}
        onReady={onReady}
        setError={setError}
        setTrackOnPlaylist={setTrackOnPlaylist}
        getIndexTrack={getIndexTrack}
        isShow={isShowVideo}
      />
      <div className="track-slider">
        <div className='track-slider__info'>
          <TrackInfo trackData={playingTrack}/>
          <InfoBtns 
            isShow={isShowVideo} 
            setIsShow={setIsShow} 
            isRepeat={isRepeatPlaylist} 
            setIsRepeat={setIsRepeat}/>
        </div>
        <div className='track-slider__control'>
          <ControlBtns 
            setTrackOnPlaylist={setTrackOnPlaylist}
            getIndexTrack={getIndexTrack}
            player={player}
          />
          <Soundtrack 
            dispatch={dispatch}
            trackData={playingTrack}
            player={player}
          />
        </div>
        <input className='track-slider__volume' type="range" min="0" max="100" value={volume} onInput={handleVolume} />
      </div>
    </>
  )
}
