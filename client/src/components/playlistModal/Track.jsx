import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as LikeBtn } from '../../img/like.svg'
import { removeFavoriteTrack, addFavoriteTrack } from '../../store/Actions';
import playBtn from '../../img/play.svg'
import stopBtn from '../../img/stop.svg'
import '../../styles/song.css'
import '../../styles/playing.css'

import { formatTime, isFavorite } from '../../helper';
import { getImageUrl } from '../../helper/index';
import Playing from './Playing';
import { getFavoriteTracks, getTrack, getIsPlaying } from '../../store/selectors'
import { useCountryName } from '../../hooks/useCountryName';

export default function Track({ trackData, handleClick }) {
  const isTrackFavorite = isFavorite(useSelector(getFavoriteTracks), trackData.videoId, 'videoId');
  const isCurrentTrack = useSelector(getTrack).videoId === trackData.videoId;
  const isPlaying = useSelector(getIsPlaying);
  const country = useCountryName(trackData);
  const dipatch = useDispatch()

  function manageFavorite() {
    if (isTrackFavorite) dipatch(removeFavoriteTrack(trackData.videoId))
    else dipatch(addFavoriteTrack({...trackData, country: country}))
  }

  return (
    <div className="song">
      <img className="song__img" src={getImageUrl(trackData)} alt="" />
      <div className="song__info">
        <div className="song__name">{trackData.name}</div>
        <div className="song__author">{trackData.author.name}</div>
        {trackData.country && <div className="song_country">{trackData.country}</div>}
      </div>
      <div className="song__duration">{formatTime('milliseconds', trackData.duration)}</div>
      <button className="song__btn-favorites btn-reset" onClick={manageFavorite}>
        <LikeBtn fill={isTrackFavorite ? 'red' : 'black'} />
      </button>
      <button className='song__control-play btn-reset' onClick={() => handleClick(trackData)}>
        {isCurrentTrack ? isPlaying ? <Playing /> : <img src={stopBtn} alt='' /> : <img src={playBtn} alt='' />}
      </button>
    </div>
  )
}
