import React from 'react'
import image from '../img/image 1.png'
import '../styles/song.css'


export default function Song() {
  return (
    <div className="song">
        <img src={image} alt="" className="song-img"/>
        <div className="song-info">
            <div className="song-name">Hero</div>
            <div className="artist">Skillet</div>
        </div>
        <span className="material-icons outlined heart">
            favorite_border
        </span>
        <div>3:00</div>
        <span className="material-icons outlined">
            play_circle
        </span>
    </div>
  )
}
