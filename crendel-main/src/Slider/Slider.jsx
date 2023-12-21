import React from 'react'
import "./Slider.css"
import SliderItem from './SliderItem.jsx'

const Slider = () => {
  return (
    <div className="slider">
        <SliderItem />
        <SliderItem />
        <SliderItem />
    </div>
  )
}

export default Slider