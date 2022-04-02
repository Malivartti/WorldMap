import React from 'react'
import image from '../img/image 3.png';


export default function Favorites() {
  return (
    <div className="favorites">
      <h1>Favorite tracks</h1>
        <img src={image} alt="" className="playlist-img"/>
    </div>
  )
}

