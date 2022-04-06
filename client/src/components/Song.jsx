import React from 'react'
import playBtn from '../img/play.svg'
import '../styles/song.css'


export default function Song({ image, name, author, duration }) {
  return (
    <div className="song">
        <img className="song__img" src={image} alt="" />
        <div className="song__info">
            <div className="song__name">{name}</div>
            <div className="song__author">{author}</div>
        </div>
        <span className="song__btn-favorites material-icons outlined">
            favorite_border
        </span>  
        <div className="song__duration">{ duration }</div>
        <button className='song__control-play btn-reset'><img src={playBtn} alt=''/></button>
    </div>
  )
}
