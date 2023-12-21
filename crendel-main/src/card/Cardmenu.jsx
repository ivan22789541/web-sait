import React from 'react'
import './Cardmenu.css'

const Cardmenu = () => {
    return (
        <div className='card_menu'>
            <img src="src/assets/Card_img/DSC_2804-PhotoRoom 1.png" alt="" />
            <p>Утка запеченная с апельсинами</p>
            <p1>3800 ₽ / 1 шт</p1>
            <div className="number">
                <div className="min">
                    <img src="src/assets/Card_img/min.svg" alt="" />
                </div>
                <p>1 шт</p>
                <div className="sum">
                    <img src="src/assets/Card_img/sum.svg" alt="" />
                </div>
                
            </div>
        </div>
    )
}

export default Cardmenu