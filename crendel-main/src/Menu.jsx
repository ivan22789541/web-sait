import React from 'react'
import './Menu.css'
import Header from './Header/Header.jsx'
import Block from './Block/Block.jsx'
import InputSearch from './Input/InputSearch'
import Slidermenuitem from './Slider/Slidermenuitem.jsx'
import Cardmenu from './card/Cardmenu.jsx'

function Menu() {
    return (
        <>
            <Header />
            <Block />
            <div className="search">
                <InputSearch placeholder={'Поиск'} type={'text'} />
            </div>
            <Slidermenuitem />
            <Cardmenu />
        </>

    )
}

export default Menu