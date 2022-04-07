import React from 'react'
import playBtn from '../img/play.svg'
import '../styles/song.css'

import { formatTime, formatMillisecondsToSeconds } from '../helper';
import { getImageUrl } from './../helper/index';

export default function Track({ trackData, handleClick }) {
  return (
    <div className="song">
        <img className="song__img" src={getImageUrl(trackData)} alt="" />
        <div className="song__info">
            <div className="song__name">{trackData.name}</div>
            <div className="song__author">{trackData.author.name}</div>
        </div>
        <span className="song__btn-favorites material-icons outlined">
            favorite_border
        </span>  
        <div className="song__duration">{ formatTime(formatMillisecondsToSeconds(trackData.duration)) }</div>
        <button className='song__control-play btn-reset' onClick={() => handleClick(trackData)}>
          <img src={playBtn} alt=''/>
        </button>
    </div>
  )
}
