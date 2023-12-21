import React from 'react'
import './Container.css'
import Card from '../card/Card.jsx'

const Container = () => {
    return (
        <div className="">
            <div className='txt_cont'>
                <p className="title_cont">Только лучшее</p>
                <p className="title_cont_i">НАШЕ МЕНЮ</p>
            </div>
            <div className="card_main">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    )
}

export default Container