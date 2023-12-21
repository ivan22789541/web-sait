import React from 'react'
import "./Slidermenuitem.css"
import NameMenu1 from './NameMenu/NameMenu1'
import NameMenu2 from './NameMenu/NameMenu2'
import NameMenu3 from './NameMenu/NameMenu3'
import NameMenu4 from './NameMenu/NameMenu4'
import NameMenu5 from './NameMenu/NameMenu5'
import NameMenu6 from './NameMenu/NameMenu6'

const Slidermenuitem = () => {
  return (
    <div className="slider_menu_item">
        <NameMenu1 />
        <NameMenu2 />
        <NameMenu3 />
        <NameMenu4 />
        <NameMenu5 />
        <NameMenu6 />
    </div>
  )
}

export default Slidermenuitem