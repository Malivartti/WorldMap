import React from 'react'
import image from '../img/image 4.png'

export default function PlaylistItem({name, showPlaylistSongs}) {
  return (
    <div className="playlist-item" onClick={showPlaylistSongs}>
        <img src={image} alt="" className="playlist-img"/>
        <div>{name}</div>
        <span>heart</span>
        <div>3:00</div>
    </div>
  )
}
