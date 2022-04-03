import React from 'react'
import image from '../img/image 3.png';


export function Favorites() {
  return (
    <div className="favorites">
      <h2 className='title'>Favorite tracks</h2>
      <img src={image} alt="" className="playlist__img" />
    </div>
  )
}

export default Favorites;