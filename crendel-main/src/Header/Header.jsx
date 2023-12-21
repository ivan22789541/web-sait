import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Header.css'


const Header = () => {

  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  return (<>
    <div id="header">
      <img onClick={() => {
        setIsActive(prev => !prev)
      }} class='menu-btn' src="src/assets/img_home/nav.svg" />
      <img class='menu_alst' src="src/assets/img_home/Search.svg" />
      <img onClick={() => navigate("/")} class='menu_alst' src="src/assets/img_home/Group 361.svg" />
      <img class='menu_alst' src="src/assets/img_home/Buy.svg" />
      <img class='menu_alst' src="src/assets/img_home/Calling.svg" />
    </div>

    <div class={`menu ${isActive ? 'active' : ''}`}>
      <nav>
        <ul>
          <li onClick={() => navigate("/Menu")} className='split'><a href="#">Меню</a></li>
          <li className='split'><a href="#">Блюда на заказ</a></li>
          <li className='split'><a href="#">Контакты</a></li>
          <li className='split'><a href="#">Оплата</a></li>
          <li className='split'><a href="#">Доставка</a></li>
        </ul>
      </nav>
    </div>
  
  </>  
  )
}

export default Header