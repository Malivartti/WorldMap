import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useCountryName } from '../../hooks/useCountryName';
import { getPlayingTrack, getPlayingPlaylist, getTrackVolume } from '../../store/Selectors/appValues';
import { setPlayingTrack } from '../../store/Actions/appValues';
import TrackInfo from './TrackInfo';
import InfoBtns from './InfoBtns';
import ControlBtns from './ControlBtns';
import Soundtrack from './Soundtrack';
import Video from './Video';
import TrackVolume from './TrackVolume';

export default function TrackSlider({ setError }) {
  const playingTrack = useSelector(getPlayingTrack);
  const playingPlaylist = useSelector(getPlayingPlaylist).content;
  const trackCountry = useCountryName(playingTrack);
  const volume = useSelector(getTrackVolume)
  const dispatch = useDispatch()

  const [player, setPlayer] = useState(null)
  const [isShowVideo, setIsShowVideo] = useState(false)
  const [isRepeatPlaylist, setIsRepeatPlaylist] = useState(false)

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
        dispatch={dispatch}
        trackData={playingTrack}
        volume={volume}
        setError={setError}
        setPlayer={setPlayer}
        isShowVideo={isShowVideo}
        setTrackOnPlaylist={setTrackOnPlaylist}
        getIndexTrack={getIndexTrack}
      />
      <div className="track-slider">
        <div className='track-slider__info'>
          <TrackInfo trackData={playingTrack} />
          <InfoBtns
            isShowVideo={isShowVideo}
            setIsShowVideo={setIsShowVideo}
            isRepeatPlaylist={isRepeatPlaylist}
            setIsRepeatPlaylist={setIsRepeatPlaylist} />
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
        <TrackVolume
          dispatch={dispatch}
          player={player}
          volume={volume}
        />
      </div>
    </>
  )
}
