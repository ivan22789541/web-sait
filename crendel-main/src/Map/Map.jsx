import React from 'react'
import './Map.css'
import Btn from './btn/Btn'

const Map = () => {
    return (
        <div>
            <div className='txt_cont'>
                <p className="title_cont">Самая быстрая</p>
                <p className="title_cont_i">ДОСТАВКА</p>
            </div>
            <div className="map_script">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A307b30f673f25fe78d0ddc1064c926fb9a9691fa8543afb4c41d44ffdde807b1&amp;source=constructor" width="330" height="190" frameborder="0"></iframe>
            </div>
            <Btn className = "btn_map" />
        </div>
    )
}

export default Map