import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='card_cont'>
        <div className="img_cont">
            <img src="src/assets/Card_img/zavtrak.png" alt="Zavtrak" />
        </div>
        <p className="card_name">ЗАВТРАК</p>
    </div>
  )
}

export default Card