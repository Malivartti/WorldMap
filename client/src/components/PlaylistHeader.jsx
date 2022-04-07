import React from 'react'
import { getImageUrl } from '../helper'
import playBtn from '../img/play.svg'

export default function PlaylistHeader({playlist}) {
  return (
    <div className="playlist__card">
        <img className="playlist__card-img" src={getImageUrl(playlist)} alt=""/>
        <div className="playlist__card-main">
          <div className="playlist">
            <h2 className="playlist__card-title">{playlist.title}</h2>
            <div className="playlist__card-btns"> 
              <button className='song__control-play btn-reset'>
                <img src={playBtn} alt=''/>
              </button>
              <span className="playlist__btn-favorites material-icons outlined">
                favorite_border
              </span>  
            </div>
          </div>
          <div className="playlist__card-info">
            {playlist.owner} * {playlist.dateYear} * {playlist.trackCount} 
          </div>
        </div>
    </div>
  )
}

