import React from 'react'
import './Catalog.css'
import Header from './Header/Header'
import Slidermenuitem from './Slider/Slidermenuitem.jsx'

const Catalog = () => {
    return (
        <div>
            <Header />
            <Slidermenuitem />
            <div className="card_catalog">
                <img className='img_catalog' src="src/assets/Card_img/DSC_2804-PhotoRoom 1.png" alt="" />
                <p className='txt_max'>Утка запеченная с апельсинами</p>
                <p className='txt_min'>Утка, апельсин</p>
                <p className='txt_min'>1 шт</p>
                <div className="buy">
                    <div className="min">
                        <img src="src/assets/Card_img/min.svg" alt="" />
                    </div>
                    <p className='number_min'>1 шт</p>
                    <div className="sum">
                        <img src="src/assets/Card_img/sum.svg" alt="" />
                    </div>
                    <form action="#">
                        <button className='btn_catalog' type='sumbit'>Заказать</button>
                    </form>
                </div>
                <p className='price'>3800 ₽</p>
            </div>
        </div>
    )
}

export default Catalog