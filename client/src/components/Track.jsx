import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as LikeBtn } from '../img/like.svg'
import { removeFavoriteTrack, addFavoriteTrack } from '../store/Actions';
import playBtn from '../img/play.svg'
import '../styles/song.css'

import { formatTime, formatMillisecondsToSeconds } from '../helper';
import { getImageUrl } from './../helper/index';

export default function Track({ trackData, handleClick }) {
  const isFavorite = useSelector(state => state.favoriteTracks.some((treck) => treck.videoId === trackData.videoId))
  const dipatch = useDispatch()

  function manageFavorite() {
    if (isFavorite) dipatch(removeFavoriteTrack(trackData.videoId))
    else dipatch(addFavoriteTrack(trackData))
  }

  return (
    <div className="song">
      <img className="song__img" src={getImageUrl(trackData)} alt="" />
      <div className="song__info">
        <div className="song__name">{trackData.name}</div>
        <div className="song__author">{trackData.author.name}</div>
      </div>
      <button className="song__btn-favorites btn-reset" onClick={manageFavorite}>
        <LikeBtn fill={isFavorite ? 'red' : 'black'} />
      </button>
      <div className="song__duration">{formatTime(formatMillisecondsToSeconds(trackData.duration))}</div>
      <button className='song__control-play btn-reset' onClick={() => handleClick(trackData)}>
        <img src={playBtn} alt='' />
      </button>
    </div>
  )
}
